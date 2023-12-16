import {createSlice} from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name: "todo",
    initialState:{
        value:[]
    },
    reducers:{
        AddTodo:(state, action)=>{
            state.value.push(action.payload)
        },
        DeleteTodo:(state, action)=>{
            state.value.splice(action.payload, 1)
        },
        EditTodo:(state, action)=>{
            //{index:1, task:"Todo Name"}
            state.value.splice(action.payload['index'], 1, action.payload['task'])
        },
    }
})

export const {AddTodo, DeleteTodo, EditTodo} = TodoSlice.actions;

export default TodoSlice.reducer;