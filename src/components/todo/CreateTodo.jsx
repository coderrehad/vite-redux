import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/todo/TodoSlice.js";
import {useRef} from "react";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef();
    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-10'>
                    <input ref={taskInput} className='form-control w-100' type='text' placeholder='Enter Task'/>
                </div>
                <div className='col-2'>
                    <button onClick={()=>dispatch(AddTodo(taskInput.current.value))} className='btn btn-dark'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;