"use client"

import ToolBar, {PlayerDetails, Pseudo, Score, Settings} from "@/components/ToolBar";
import Board from "@/components/Board";
import {DataProvider, useData} from "@/context/DataProvider";
import {useParams} from "next/navigation";

const GameContent = ({h, w}) => {
  const { data } = useData()

  return (
    <div className="relative flex flex-col items-center py-2 gap-2 h-full overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-300 bg-radial from-purple-400 to-purple-100 z-0 ${data.player ? "opacity-0" : "opacity-100"}`}></div>
      <div className={`absolute inset-0 transition-opacity duration-300 bg-radial from-pink-400 to-pink-100 z-0 ${data.player ? "opacity-100" : "opacity-0"}`}></div>

      <div className="relative z-10 h-full w-full flex flex-col items-center gap-2 overflow-hidden">
        <ToolBar>
          <Settings/>
          <PlayerDetails>
            <Pseudo/>
            <Score/>
          </PlayerDetails>
        </ToolBar>
        <div className="grid place-items-center h-full w-full sm:w-xl p-10">
          <Board height={h} width={w}/>
        </div>
      </div>
    </div>
  )
}

const Game = () => {
  const { height, width } = useParams()
  const h = parseInt(height) || 5
  const w = parseInt(width) || 5

  return (
    <DataProvider>
      <GameContent h={h} w={w}  />
    </DataProvider>
  )
}
export default Game
