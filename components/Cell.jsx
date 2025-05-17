import React from 'react'
import * as motion from "motion/react-client";

const Cell = ({ value, size, delay, onSquareClick }) => {
  const filteredValue = value?.number > 4 ? 4 : value?.number
  return(
    <motion.button
      onClick={onSquareClick}
      className={`
        aspect-square transition-all duration-400 overflow-hidden
        ${ size >= 9 && "rounded-xl" }
        ${ size === 6 && "rounded-2xl" }
        ${ size === 5 && "rounded-3xl" }
        ${value
        ? `shadow-md ${value?.type === "X" ? "bg-pink-400" : "bg-purple-600"}`
        : "bg-white/60 inset-shadow-sm inset-shadow-black/30"}
      `}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type:"tween" , duration: 0.2, delay: delay * 0.1 }}
    >
      <Dots value={filteredValue} size={size} />
    </motion.button>
  )
}
export default Cell

export const Dots = ({value, size}) => {
  if (!value) return null;

  return (
    <div
      className={`
        flex gap-1 items-center justify-center
        ${size >= 9 && "scale-50 "}
        ${size === 6 && "scale-90 p-2 flex-wrap"}
        ${size === 5 && "p-2 flex-wrap"}
      `}
    >
      {Array(value).fill(1).map((_, index) => (
        <motion.span
          key={index}
          className={"bg-white w-2 h-2 rounded-full"}
          initial={{ opacity: 0, width: 0, height: 0 }}
          animate={{ opacity: 1, width: 16, height: 16 }}
          transition={{ type: "spring", duration: 0.3 }}
        />
      ))}
    </div>
  )
}
