import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className={`h-full w-full pb-2 bg-gradient-to-t from-blue-800 to-blue-500 relative flex flex-col`}>
      {children}
    </div>
  )
}
export default Layout
