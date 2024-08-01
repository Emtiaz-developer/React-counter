import React from 'react'
import { useSelector } from 'react-redux'

const GetValues = () => {
    const {counter} = useSelector((state) => state.counter);
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className='font-semibold text-5xl text-center'>Counter value is = {counter}</h1>
    </div>
    </>
  )
}

export default GetValues