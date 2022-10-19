import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import messageReducer from '../features/message/messageSlice'
import todoListReducer from '../features/todoList/todoListSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: messageReducer,
    todoList: todoListReducer
  },
});
