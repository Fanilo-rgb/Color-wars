"use client"
import {SettingsIcon} from "lucide-react";
import * as motion from "motion/react-client"
import {useEffect, useState} from "react";
import {useData} from "@/context/DataProvider";

const ToolBar = ({children}) => {
  return (
    <div className={"flex gap-1 items-center border-4 border-gray-700 bg-white/80 h-fit w-fit p-1 rounded-full"}>
      {children}
    </div>
  )
}
export default ToolBar

export const Pseudo = () => {
  const [name, setName] = useState("Player")

  useEffect(() => {
    const storedName = localStorage.getItem("pseudo");
    if (storedName) {
      setName(storedName);
    }
  }, [])

  const saveName = () => {
    localStorage.setItem("pseudo", name)
  }

  return (
    <div className={"bg-white rounded-full h-12 overflow-hidden text-white"}>
      <input
        onBlur={saveName}
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={"bg-gradient-to-l w-44 from-blue-900 to-blue-500 h-full text-center outline-none"}
      />
    </div>
  )
}

export const Score = () => {
  const { data } = useData();

  return (
    <motion.div className={"h-12 w-44 flex items-center justify-center rounded-full"}>{data.score}</motion.div>
  )
}

export const PlayerDetails = ({ children }) => {
  return (
    <div className={"bg-white p-1 rounded-full flex items-center gap-2 font-semibold text-lg"}>
      {children}
    </div>
  )
}

export const Settings = () => {
  return (
    <motion.div
      whileHover={{ rotate: 180 }}
      transition={{ type: "spring" }}
      className={"bg-white h-14 w-14 rounded-full grid place-items-center"}
    >
      <SettingsIcon size={40}/>
    </motion.div>
  )
}
