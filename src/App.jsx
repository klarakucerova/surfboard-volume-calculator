import { useState } from 'react';
import Calculator from './components/Calculator.jsx';
import Description from "./components/Description";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

        <div className="App calculator">
            <Calculator />
            <div className="calculator__img">
                <span className="author">Photo by <a href="http://www.andrewshield.com.au/" target="_blank">Andrew Shields</a></span>
            </div>
        </div>

        <div className="description">
            <Description />
        </div>
        </>
    )
}

export default App
