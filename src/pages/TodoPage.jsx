import CreateTodo from "../components/todo/CreateTodo.jsx";
import TodoList from "../components/todo/TodoList.jsx";
import {Link} from "react-router-dom";

const TodoPage = () => {
    return (
        <>
            <Link className='btn btn-dark m-2' to='/'>Counter App</Link>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header text-white text-center bg-dark'>
                                <h3>This is my Todo App</h3>
                            </div>
                            <div className='card-body'>
                                <CreateTodo/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoPage;