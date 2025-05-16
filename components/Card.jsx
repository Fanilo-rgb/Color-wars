"use client"
import Image from "next/image";
import * as motion from "motion/react-client"

const Card = ({ option, i }) => {
  const { title, size, scale} = option;
  const delay = i * 0.2

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 0.4,
        scale: { type: "spring" }, visualDuration: 0.4, bounce: 0.5,
      }}
      whileHover={{ scale: 1.05, rotate: 5, transition: { duration: .2 }}}
      className={"relative bg-white h-52 w-52 rounded-4xl shadow-lg overflow-hidden"}
    >
      <div className={`${title} absolute w-full h-full text-gray-900`}>
        <div className={"absolute bottom-5 left-5"}>
          <h1>{title}</h1>
          <p className={"font-medium text-lg"}>{size}x{size}</p>
        </div>
      </div>
      <Image
        className={`
          -rotate-45 -z-50
          ${scale === "125" && "scale-125"}
          ${scale === "175" && "scale-175"}
          ${scale === "200" && "scale-200"}
        `}
        src={"/images/Ref.png"}
        alt={"Board description"}
        width={500}
        height={500}
      />
    </motion.div>
  )
}
export default Card
