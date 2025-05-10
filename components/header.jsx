import React from 'react'
import {Menu} from "lucide-react";

const Header = () => {
  return (
    <div className={`h-14 flex items-center text-white`}>
      <div className={`h-14 w-14 flex items-center justify-center`}>
        <Menu size={30}/>
      </div>
      <div className={"pl-5 bg-white/20 h-14 flex-1 flex items-center rounded-bl-2xl"}>
        <h1>Color Wars</h1>
      </div>
    </div>
  )
}
export default Header
