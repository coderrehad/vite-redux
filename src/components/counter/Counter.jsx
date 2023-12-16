import {useDispatch, useSelector} from "react-redux";
import {increment, decrement , setCustom} from "../../redux/state/counter/CounterSlice.js";
import {useRef} from "react";


const Counter = () => {
    const Number = useRef();
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div className='card'>
                <div className='card-header bg-secondary'>
                    <h3 className='text-white'>Card Header</h3>
                </div>
                <div className='card-body text-center'>
                    <h3>{count}</h3>
                    <div className='my-4'>
                        <button onClick={()=>{dispatch(increment())}} className='btn btn-dark mx-3'>Increment</button>
                        <button onClick={()=>{dispatch(decrement())}} className='btn btn-dark'>Decrement</button>
                    </div>
                    <div className='my-4'>
                         <input ref={Number} type='number' className='form-control my-2 mx-auto w-50'/>
                        <button onClick={()=>dispatch(setCustom(Number.current.value))} className='btn btn-dark w-50 my-2'>Set Custom</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;