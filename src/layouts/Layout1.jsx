import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout1 = () => {
    return (
        <div>
            <div>Header</div>
            <div><NavLink to="/" >Home</NavLink></div>
            <hr />
            <div><Outlet /></div>
        </div>
    )
}

export default Layout1