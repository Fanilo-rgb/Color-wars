import { useState } from 'react'
import Cell from "@/components/Cell";
import { useData } from "@/context/DataProvider";
import GameOverModal from "@/components/GameOverModal";
import { useRouter } from "next/navigation";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const Board = ({ height, width }) => {
  const router = useRouter();
  const { data, setData } = useData()

  const [xFirstTour, setXFirstTour] = useState(true);
  const [oFirstTour, setOFirstTour] = useState(true);
  const [winner, setWinner] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(
    () => Array.from({ length: height }, () => Array(width).fill(null))
  );

  const checkGameOver = (grid) => {
    let playerFound = null

    for (const row of grid) {
      for (const cell of row) {
        if (!cell) continue;
        if (!playerFound) {
          playerFound = cell.type;
        } else if (cell.type !== playerFound) {
          return false;
        }
      }
    }

    return !!playerFound;
  }

  const checkScore = (grid) => {
    let player = "X"
    let score = 0

    for (const row of grid) {
      for (const cell of row) {
        if (cell) {
          if (cell.type === player) {
            score++
          }
        }
      }
    }
    return score;
  }

  const duration = 400

  const handleClick = async (i, j) => {
    const nextSquares = squares.map(row => row.slice());
    const type = xIsNext ? "X" : "O";

    // Premier tour
    if ((xIsNext && xFirstTour) || (!xIsNext && oFirstTour)) {
      if (squares[i][j]) return;

      nextSquares[i][j] = { type, number: 3 };

      if (xIsNext) setXFirstTour(false);
      else setOFirstTour(false);

      setData({ ...data, player: !xIsNext })
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
      return;
    }

    // Vérifie que le joueur clique sur sa propre case
    const cell = nextSquares[i][j];
    if (!cell || cell.type !== type) return;

    // Incrémente la case cliquée
    nextSquares[i][j] = { ...cell, number: cell.number + 1 };
    setSquares(nextSquares.map(row => row.slice()));
    await delay(duration); // attendre avant l'explosion

    // Boucle d’explosions
    let spread = true;
    while (spread) {
      spread = false;
      const toExplode = [];

      //  Repère les cases à exploser
      nextSquares.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell?.number >= 4) {
            toExplode.push([i, j]);
          }
        });
      });

      if (toExplode.length === 0) break;

      // Explosion
      toExplode.forEach(([i, j]) => {
        nextSquares[i][j] = null;

        const directions = [
          [i - 1, j],
          [i + 1, j],
          [i, j - 1],
          [i, j + 1],
        ];

        directions.forEach(([x, y]) => {
          if (x >= 0 && x < height && y >= 0 && y < width) {
            if (nextSquares[x][y]) {
              nextSquares[x][y] = {
                ...nextSquares[x][y],
                type,
                number: nextSquares[x][y].number + 1,
              };
            } else {
              nextSquares[x][y] = { type, number: 1 };
            }
          }
        });
      });

      setSquares(nextSquares.map(row => row.slice())); // on déclenche une MAJ visuelle
      await delay(duration); // pause entre vagues
      spread = toExplode.length > 0;
    }

    await delay(duration);

    setData({ ...data, score: checkScore(nextSquares) })

    if (checkGameOver(nextSquares)) {
      setWinner(type)
      return;
    }
    // 🔁 Changer de joueur
    setData({ ...data, player: !xIsNext, score: checkScore(nextSquares) })
    setXIsNext(!xIsNext);
  };

  const handleClose = () => {
    router.replace("/")
  }

  return (
    <>
      <div
        className={`
          grid grid-rows-${height} rounded-4xl aspect-square w-full max-w-2xl
          ${height === 9 ? "gap-1.5" : "gap-2"}
        `}
      >
        {squares.map((rows, i) => (
          <div
            key={i}
            className={`
              grid grid-cols-${width}
              ${width === 9 ? "gap-1.5" : "gap-2"}
            `}
          >
            {rows.map((_, j) => {
              const delay = i + j
              return(
                <Cell key={j} size={ height } value={squares[i][j]} delay={delay} onSquareClick={() => handleClick(i, j)} />
              )
            })}
          </div>
        ))}
      </div>
      {winner && <GameOverModal winner={winner} onClose={handleClose} />}
    </>
  );
};
export default Board
