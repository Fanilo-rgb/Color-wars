"use client"
import React, {useEffect, useState} from 'react'
import {motion} from "motion/react";

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => {
      setCursorVariant("click")
    }

    const mouseUp = () => {
      setCursorVariant("default")
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    text: {
      x: mousePosition.x - 55,
      y: mousePosition.y - 55,
      height: 110,
      width: 110,
      backgroundColor: '#fff085',
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      height: 4,
      width: 4,
    }
  }

  const ring1 = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      border: 0,
      height: 8,
      width: 8,
      backgroundColor: '#fff085',
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
    }
  }

  const ring2 = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      border: 0,
      height: 8,
      width: 8,
      backgroundColor: '#fff085',
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      border: 0
    }
  }

  const ring3 = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      border: 0,
      height: 8,
      width: 8,
      backgroundColor: '#fff085',
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      border: 0,
    }
  }

  return (
    <>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className={"z-50 md:bg-black md:border h-2 w-2 rounded-full fixed top-0 left-0 pointer-events-none"}
      />
      <motion.div
        variants={ring1}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.2, dumping: 50, stiffness: 150 }}
        className={"z-50 bg-transparent md:border border-black/80 h-4 w-4 rounded-full fixed top-0 left-0 pointer-events-none"}
      />
      <motion.div
        variants={ring2}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.2, dumping: 50, stiffness: 100 }}
        className={"z-50 bg-transparent md:border border-black/80 h-6 w-6 rounded-full fixed top-0 left-0 pointer-events-none"}
      />
      <motion.div
        variants={ring3}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.2, dumping: 50, stiffness: 70 }}
        className={"z-50 bg-transparent md:border border-black/80 h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none"}
      />
    </>
  )
}
export default Mouse
