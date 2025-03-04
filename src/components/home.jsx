import React, { useState } from 'react'
import './home.css'
import Todo from './todoItem'
import { v4 as uuidv4 } from 'uuid';
import logo from "../images/to-do-list.png"
import search from "../images/search.png"
import notify from "../images/message.png"

const home = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    // settodo({...todo,[name]: value})
    settodo(value)
  }
  function Addtodo(event) {
    settodos([...todos, todo])
    settodo("");
    event.preventDefault();
  }

  function Deltodo(todo_id) {
    settodos(todos.filter((item, index) => {
      return todo_id !== index;
    }))
  }
  function EditTodo(todo_id) {
    let itodo = todos.filter(((item, index) => {
      return todo_id === index;
    }));

    settodo(itodo[0].todo);
    settodos(todos.filter((item, index) => {
      return todo_id !== index;
    }))
  }
  return (
    <div>
      <nav className='nav'>
        <div className='logo'>
          <img className='logo-img' src={logo} alt="" />
          <div className='logo-name'>
            iDO
          </div>
        </div>
        <div className='search'>
          <input type="text" placeholder='AnyThing' />
          <div><img className='search-logo' src={search} alt="" /></div>
        </div>
        <div><img className='notify-logo' src={notify} alt="" /></div>
      </nav>
      <main className='main-content'>
        {/* <div className='left'>
          <div>namelogo</div>
          <div>
            <ul className='todo_list'>
              <li>DashBoard</li>
              <li>View To_do List</li>
              <li>Calender</li>
              <li>Help</li>
            </ul>
          </div>
        </div> */}
        <div className='right'>
          <div className='mainput'>
            <input className='inpt1' onChange={handleChange} value={todo} name="todo" type="text" placeholder='Add todo item' />
            <button className='btn1' onClick={Addtodo}>ADD</button>
          </div>
          <div>
            {todos.map((item, index) => {
              return <Todo key={uuidv4()} onDel={() => { return Deltodo(index) }} onEdit={() => { return EditTodo(index) }} list={item} />
            })}

          </div>


        </div>
        <div></div>
      </main>
    </div>
  )
}

export default home
