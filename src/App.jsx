import { useState } from 'react';
import Calculator from './components/Calculator.jsx';
import Description from "./components/Description";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

        <div className="App calculator">
            <Calculator />
            <div className="calculator__img"></div>
        </div>

        <div className="description">
            <Description />
        </div>
        </>
    )
}

export default App
