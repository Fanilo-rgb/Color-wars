import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className={`h-full w-full bg-gradient-to-t from-blue-800 to-blue-500`}>
      {children}
    </div>
  )
}
export default Layout
