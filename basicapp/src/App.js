import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter<20){
    setCounter(counter+1);
  }
  }
  const removeValue = () => {
    if(counter>0){
    setCounter(counter-1);
  }
  }
  return (
    <>
    <h1>Welcome to Github Vs code console</h1>
    <h2>{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
