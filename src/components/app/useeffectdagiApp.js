import { useState } from "react";
import { useEffect } from "react";
function App() {
    const [counter, setCounter] = useState(0)
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        console.log('effect')
    }, [counter])
    return (
        <div className="container-md mx-auto mt-5">
            <h1>{counter}</h1>
            <button className="btn btn-primary mx-2" onClick={onIncrement}>+</button>
            <button className="btn btn-primary" onClick={decrement}>-</button>
        </div>
    );
}

export default App;