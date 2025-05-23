"use client"
import { AnimatePresence, motion } from "motion/react"
import {useState} from "react";

const GameOverModal = ({ winner, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div className={"fixed inset-0 z-50"}>
        <AnimatePresence onExitComplete={onClose}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex items-center justify-center bg-black/10 bg-opacity-50  backdrop-blur-xs"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className={`
                  bg-gradient-to-bl from-white/70 p-5 rounded-3xl text-center shadow-lg
                  ${ winner === "X" && "to-orange-300" }
                  ${ winner === "O" && " to-blue-300/70" }
                `}
              >
                { winner === "X" && <h2 className="text-2xl font-bold mb-4">Rose à gagner 🔥</h2> }
                { winner === "O" && <h2 className="text-2xl font-bold mb-4">Violet à gagner 🔥</h2> }
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        {isVisible && (
          <div className={"absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 flex gap-2"}>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              whileTap={{ y: 3, transition: { duration: 0.1 } }}
              onClick={() => setIsVisible(false)}
              className={`
              px-4 py-2 bg-linear-to-l/hsl text-white shadow-md rounded-2xl transition-all
              ${ winner === "X" && "from-orange-400 via-red-500 to-orange-400" }
              ${ winner === "O" && " from-blue-800 to-blue-500" }
            `}
            >
              Fermer
            </motion.button>
          </div>
        )}
      </div>
    </>
  );
};
export default GameOverModal
