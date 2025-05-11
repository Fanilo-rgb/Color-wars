"use client"

import {useSearchParams} from "next/navigation";

const Game = () => {
  const searchParams = useSearchParams()
  const size = parseInt(searchParams.get("size"))
  return (
    <div>Game {size}</div>
  )
}
export default Game
