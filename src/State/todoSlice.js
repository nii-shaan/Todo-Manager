import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
            // state.todos.map((i)=>console.log(i.todo))                   PASSED / WORKING
        },
        editTodo:(state,action)=>{
            state.todos=state.todos.map((item)=>item.id===action.payload.id?{...item,todo:action.payload.todo}:item)
            
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((item)=>item.id!==action.payload.id)

        },
        markTodo:(state,action)=>{
            state.todos=state.todos.map((item)=>item.id===action.payload.id?{...item,marked:!item.marked}:item)
        }
    }
})

export const {addTodo,editTodo,deleteTodo,markTodo} = todoSlice.actions
export const todoReducer = todoSlice.reducer;