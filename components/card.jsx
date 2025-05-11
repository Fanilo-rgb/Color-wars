import Image from "next/image";

const Card = ({ option }) => {

  const { title, size, scale} = option;

  return (
    <div className={"relative bg-white h-52 w-52 rounded-4xl shadow-lg overflow-hidden"}>
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
          ${scale === "150" && "scale-150"}
          ${scale === "200" && "scale-200"}
        `}
        src={"/images/Ref.png"}
        alt={"Board description"}
        width={500}
        height={500}
      />
    </div>
  )
}
export default Card
