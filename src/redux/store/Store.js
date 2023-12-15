import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../state/counter/CounterSlice.js";

export default configureStore({
    reducer:{
        counter:counterSlice
    }
})