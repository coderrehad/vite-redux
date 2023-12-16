import Counter from "../components/counter/Counter.jsx";
import {Link} from "react-router-dom";

const CounterPage = () => {
    return (
        <>
            <Link className='btn btn-dark m-2' to='/todo'>Todo App</Link>
            <div className='container mt-4'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <Counter/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterPage;