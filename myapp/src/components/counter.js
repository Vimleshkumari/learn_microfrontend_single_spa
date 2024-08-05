import {useCallback, useState} from 'react';

export default function Counter(params) {

    const [counter, setCounter] = useState(0);
    const increment=()=>{
        setCounter(counter+1)

    }

    // const decrement=()=>{
    //     console.log("decerement is calling")
    //     if(counter>0)
    //     setCounter(counter-1)
    // }
    const decrement = useCallback(() => {
        console.log("decerement is calling")
        setCounter(prevCounter => {
            if (prevCounter > 0) {
                return prevCounter - 1;
            }
            return prevCounter; // No change if counter is 0
        });
    }, []);
   
  
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px'
        }}>
            Increment: {counter}
            <button onClick={increment}>Call Increment</button>
            {/* <button onClick={counter? decrement: null} >Call Decrement</button> */}
            <button onClick={decrement} >Call Decrement</button>

           

        </div>
    )



}