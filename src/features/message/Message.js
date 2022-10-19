import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage, selectMessage } from './messageSlice'
import './message.css'


const Message = () => {

  const message = useSelector(selectMessage)
  const dispatch = useDispatch();

  const [text, setText] = useState('')
  // const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(text))
    setText('')
  }

  return (
    <div className='message'>
      <h2>Message:</h2>
      <p>{message}</p>
      <form className='message-form' onSubmit={handleSubmit}>
        <input 
          type='text'
          onChange={handleChange}
          value={text}
        />
        <input 
          type='submit'
        />
      </form>
    </div>
  )
}

export default Message