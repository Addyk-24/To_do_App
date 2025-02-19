import React from 'react'
import "./todoitem.css"
import pin from "../images/pin.png"

const Todo = (props) => {
  return (
    <div className='mainlist'>
      <div><img className='pinlogo' src={pin} alt="" /></div>
      <div>{props.list}</div>
      <div className='btn'>
      <button className='btn2' onClick={props.onDel}>Delete</button>
      <button className='btn3' onClick={props.onEdit}>Edit</button>

      </div>
    </div>
  )
}

export default Todo
