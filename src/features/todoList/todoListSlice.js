import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        text: 'Learn Redux',
        complete: false
    }
];

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo(state, action) {
            return [...state, {
                id: state.length,
                text: action.payload,
                complete: false
            }]
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleComplete(state, action) {
            state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return todo.complete = !todo.complete
            })
        }
    }
})

export const selectTodoList = (state) => state.todoList;

export const { addTodo, removeTodo, toggleComplete } = todoListSlice.actions;
export default todoListSlice.reducer;