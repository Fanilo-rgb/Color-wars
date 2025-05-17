import Header from "@/components/Header";
import ToolBar, {PlayerDetails, Pseudo, Settings} from "@/components/ToolBar";
import Card from "@/components/Card";
import Link from "next/link";

const options = [
  {
    "title": "Classic",
    "size": 5,
    "scale": "200"
  },{
    "title": "Medium",
    "size": 6,
    "scale": "175"
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
      <div className={"flex-1 flex items-center justify-center flex-col gap-2"}>
        {options.map((option, index) => {
          return (
            <Link key={option.title} href={`/game/${option.size}/${option.size}`}>
              <Card option={option} i={index} />
            </Link>
          )
        })}
      </div>
      <div className={"flex justify-center"}>
        <ToolBar>
          <Settings/>
          <PlayerDetails>
            <Pseudo/>
          </PlayerDetails>
        </ToolBar>
      </div>
    </>
  );
}
