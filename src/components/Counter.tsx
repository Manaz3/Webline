import { useState } from 'react';
import classes from './Counter.module.scss'


function Counter() {
    
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(prev => prev - 1 )
    }

    const handleIncrement = () => {
        setCount(prev => prev + 1 )
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={handleDecrement}>-</button>
            <button className={classes.red} onClick={handleIncrement}>+</button>
        </div>
    )
}


export default Counter;