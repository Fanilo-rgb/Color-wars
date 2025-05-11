import Header from "@/components/header";
import ToolBar from "@/components/toolBar";
import Card from "@/components/card";
import Link from "next/link";

const options = [
  {
    "title": "Classic",
    "size": 5,
    "scale": "200"
  },{
    "title": "Medium",
    "size": 6,
    "scale": "150"
  },{
    "title": "Large",
    "size": 9,
    "scale": "125"
  },
]

export default function Home() {
  return (
    <>
      <Header/>
      <div className={"flex-1 flex items-center justify-center gap-5"}>
        {options.map((option) => {
          return (
            <Link key={option.title} href={`/game?size=${option.size}`}>
              <Card option={option} />
            </Link>
          )
        })}
      </div>
      <div className={"flex justify-center"}>
        <ToolBar/>
      </div>
    </>
  );
}
