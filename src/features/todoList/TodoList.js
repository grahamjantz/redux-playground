import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, selectTodoList } from './todoListSlice'
import Todo from './Todo'
import './todoList.css'

const TodoList = () => {

    const todoList = useSelector(selectTodoList);
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <div className='todo-list'>
            <h2>Todos:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type='submit'/>
            </form>
            {todoList.map((todo) => {
                return (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
        </div>
    )
}

export default TodoList