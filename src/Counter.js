import { useState, useEffect} from "react";
function Counter(props) {
    const {delta, numMax, getReset, needToReset, getMax} = props
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset, getReset])

    function incr(){
        setCount(
            function(oldcount){
                    if((oldcount + delta) > numMax) return 0
                    getMax(oldcount + delta)
                    return (oldcount + delta)
                }
        )
    }

    function reset(){
        getReset(true)
        //setCount(0)
    }

    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}> reset Counter</button>
      </div>
    );
  }
  
  export default Counter;
