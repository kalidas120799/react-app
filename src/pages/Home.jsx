import React from 'react'
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <div><NavLink to="/page" >Page</NavLink></div>
    </div>
  )
}

export default Home