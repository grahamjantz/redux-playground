import React from 'react'
import { FaCheckSquare, FaWindowClose } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleComplete } from './todoListSlice'


import './Todo.css'

const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    return (
        <div className={`todo ${todo.complete ? 'complete' : 'incomplete'}`}>
            <div className='todo-buttons'>
                <button 
                    className='todo-button'
                    onClick={() => dispatch(toggleComplete(todo.id))}
                >
                    <FaCheckSquare size={25}/>
                </button>
                <button 
                    className='todo-button' 
                    onClick={() => dispatch(removeTodo(todo.id))}
                >
                    <FaWindowClose size={25}/>
                </button>
            </div>
            <p className='todo-item'>Todo: <br/>{todo.text}</p>
        </div>
    )
}

export default Todo