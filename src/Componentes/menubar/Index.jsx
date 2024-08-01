import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='w-full py-5 bg-black'>
    <div className='container flex justify-between items-center'>
    <div>
        <h1 className='text-white text-xl'>Logo</h1>
    </div>
    <div className='text-white flex items-center gap-x-10'>
        <Link to="/">Home</Link>
        <Link to="/getvalues">GetValues</Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar