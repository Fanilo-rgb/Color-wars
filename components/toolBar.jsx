import {SettingsIcon} from "lucide-react";

const ToolBar = () => {
  return (
    <div className={"flex gap-1 items-center border-4 border-gray-700 bg-white/80 h-fit w-fit p-1 rounded-full"}>
      <Settings/>
      <PlayerDetails>
        <Pseudo/>
        <Score/>
      </PlayerDetails>
    </div>
  )
}
export default ToolBar

const Pseudo = () => {
  return (
    <div className={"bg-white rounded-full h-12 overflow-hidden text-white"}>
      <input className={"bg-gradient-to-l w-44 from-blue-900 to-blue-500 h-full text-center outline-none"}/>
    </div>
  )
}

const Score = () => {
  return (
    <div className={"h-12 w-44 flex items-center justify-center rounded-full"}>#score</div>
  )
}

const PlayerDetails = ({ children }) => {
  return (
    <div className={"bg-white p-1 rounded-full flex items-center gap-2 font-semibold text-lg"}>
      {children}
    </div>
  )
}

const Settings = () => {
  return (
    <div className={"bg-white h-12 w-12 rounded-full grid place-items-center"}>
      <SettingsIcon size={30}/>
    </div>
  )
}