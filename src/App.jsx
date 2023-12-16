import CounterPage from "./pages/CounterPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoPage from "./pages/TodoPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CounterPage/>}/>
                <Route path='/todo' element={<TodoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;