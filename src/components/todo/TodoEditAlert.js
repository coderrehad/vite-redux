import Swal from "sweetalert2";
import store from "../../redux/store/Store.js";
import {EditTodo} from "../../redux/state/todo/TodoSlice.js";

export function TodoEditAlert(item,i) {
    Swal.fire({
        icon: "question",
        title: "Are you sure?",
        input: "text",
        inputValue:item,
        showCancelButton: true,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i, task:value}))
            }
        }
    })
}