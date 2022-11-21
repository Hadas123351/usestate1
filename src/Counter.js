import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldcount){
                return oldcount + 1
            }
        )
        console.log(count)
    }

    function incr1(){
        setCount(
            function(oldcount1){
                return 0
            }
        )
        console.log(count)
    }

    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1 to Counter</button>
        <button onClick={incr1}> Click to reset Counter</button>
      </div>
    );
  }
  
  export default Counter;
