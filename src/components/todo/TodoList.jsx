import {useSelector} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert.js";
import {TodoEditAlert} from "./TodoEditAlert.js";

const TodoList = () => {
    const todoItems = useSelector(state => state.todo.value);
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-12'>
                    <div className=''>
                        <table className='table-responsive table'>
                            <thead>
                            <tr>
                                <td>No</td>
                                <td>Task Name</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                todoItems.map((item,i)=>{
                                    return (
                                        <tr key={i.toString()}>
                                            <td>{i+1}</td>
                                            <td>{item}</td>
                                            <td>
                                                <button onClick={()=>TodoEditAlert(item, i)} className='btn btn-dark'>Edit</button>
                                            </td>
                                            <td>
                                                <button onClick={()=>{TodoDeleteAlert(i)}} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;