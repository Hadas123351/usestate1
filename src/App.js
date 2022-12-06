
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1)
  const [numMax, setNumMax] = useState(10)
  const [reset, setReset] = useState(false)
  const[maxValue, setMaxValue] = useState(0)

function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}
function handleNumMax(e){
  console.log(e);
  setNumMax(Number(e.target.value))
}

function getReset(data){
  console.log(data)
  setReset(data)
}

function getMax(data){
  console.log(data)
  if (data > maxValue) setMaxValue(data)


}


  return (
    <div className="App">
      <p><h3>Couner number:</h3></p>
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <p><h3>Enter Max number:</h3></p>
      <input type = "number" value = {numMax} onChange = {handleNumMax}/>
      <p> Max value: {maxValue} </p>
      <Counter delta = {delta} numMax = {numMax} getReset = {getReset} needToReset = {reset} getMax = {getMax}/>
      <Counter delta = {delta} numMax = {numMax} getReset = {getReset} needToReset = {reset} getMax = {getMax}/>
    </div>
  );
}

export default App;