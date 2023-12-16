import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from "../state/counter/CounterSlice.js";
import TodoSlice from "../state/todo/TodoSlice.js";

export default configureStore({
    reducer:{
        counter:CounterSlice,
        todo:TodoSlice
    }
})
