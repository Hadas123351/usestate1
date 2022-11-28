import { useState } from "react";
function Counter(props) {
    const {delta} = props
    const {numMax} = props
    const [count, setCount] = useState(0)

    function incr(){
        setCount(
            function(oldcount){
                    if((oldcount + delta) < numMax) {
                        return (oldcount + delta)
                    }
                    else {
                        return 0
                    }
                }
        )
        console.log(count)
    }

    function reset(){
        setCount(0)
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
