
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1)
  const [numMax, setNumMax] = useState(1)

function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}
function handleNumMax(e){
  console.log(e);
  setNumMax(Number(e.target.value))
}

  return (
    <div className="App">
      <p><h3>Couner number:</h3></p>
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <p><h3>Enter Max number:</h3></p>
      <input type = "number" value = {numMax} onChange = {handleNumMax}/>
      <Counter delta = {delta} numMax = {numMax}/>
      <Counter delta = {delta} numMax = {numMax} />
    </div>
  );
}

export default App;
