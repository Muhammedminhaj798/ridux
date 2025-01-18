import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/reducer'

const Action = () => {
   const a= useSelector((state)=>state.counter.value)
   console.log(a)
    const dispatch=useDispatch()
   
  return (
    <div>
        <button onClick={()=>dispatch(increment(5))}>increment</button>
       <h1>hello {a}</h1>
    </div>
  )
}

export default Action
