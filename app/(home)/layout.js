import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className={`h-screen w-full pb-10 bg-gradient-to-t from-blue-800 to-blue-500 relative flex flex-col overflow-hidden`}>
      {children}
    </div>
  )
}
export default Layout
