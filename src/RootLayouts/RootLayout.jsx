import React from 'react'
import Navbar from '../Componentes/menubar/Index'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayout