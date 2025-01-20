import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToggle } from './redux/reducer'

function home() {
  const toggle = useSelector((state) => state.toggles.toggle)
  const dispatch = useDispatch()
  return (
    <div className='ml-52 mt-20'>
      <div className={`h-10 w-10 ${toggle ? "bg-blue-900" : "bg-red-900"}`} onClick={()=>dispatch(setToggle(!toggle))}></div>
      <br />
      <br />
      <div className={`h-10 w-10 ${toggle ? "bg-red-900" : "bg-blue-900"}`} onClick={()=>dispatch(setToggle(!toggle))}></div>
    </div>
  )
}

export default home
