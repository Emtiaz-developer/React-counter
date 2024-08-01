import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, dyninc, increment, reset } from '../feauters/CounterSlice';

const Home = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const handleIncrement = () =>{
        dispatch(increment(setCount((prev) => prev + 1)));
    }
    const handleDecrement = () =>{
      dispatch(decrement(setCount((prev) => prev - 1)))
    }
    const {counter} = useSelector((state) => state.counter);
    const handleReset = () =>{
      dispatch(reset(0));
      setCount(0);
    }
    const handleDynInc = () =>{
      dispatch(dyninc(10));
      setCount((prev) => prev + 10);
    }
  return (
    <>
    <div>
        <div className='mt-10'>
    <h1 className='text-center text-5xl font-mono'>{counter}</h1>
    <div className='text-center mt-5'>
    <button onClick={handleIncrement} className='text-white font-semibold rounded bg-green-500 px-3 py-2'>Increment</button>
    <button onClick={handleDecrement} className='text-white font-semibold rounded bg-red-500 mx-3 px-3 py-2'>Decrement</button>
    <button onClick={handleDynInc} className='text-white font-semibold rounded bg-green-500 mx-3 px-3 py-2'>Dyn Inc</button>
    <button onClick={handleReset} className='text-white font-semibold rounded bg-red-500 mx-3 px-3 py-2'>Reset</button>
    </div>
        </div>
    </div>
    </>
  )
}

export default Home