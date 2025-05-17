"use client"

import {createContext, useContext, useState} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    player: true,
    scoreX: 0,
    scoreO: 0,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
