import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout2 = () => {
  return (
    <div>
      <div>sidebar</div>
      <div><NavLink to="/page" >Page 1</NavLink></div>
      <div><NavLink to="/page/2" >Page 2</NavLink></div>
      <div><NavLink to="/page/3" >Page 3</NavLink></div>
      <hr />
      <div><Outlet /></div>
    </div>
  )
}

export default Layout2