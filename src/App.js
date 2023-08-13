import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(true);
  let incrementElement = useRef();
  let decrementElement = useRef();
  const paused = useRef(false);

  const clickHandler = (event) => {
    console.log(incrementElement.current.innerText);
    if(event.target.innerText === "+") setCounter(counter + 1);
    else setCounter(counter - 1);
  }

  useEffect(() => {
    let interval;
    if(!pause){
      interval = setInterval(() => {
        setCounter(counter + 1);
      }, 200);
    }else {
      paused.current = true;
    }
    return () => clearInterval(interval);
  }, [counter, pause]);

  return (
    <div className="App-header">
      <div>
        <div ref={decrementElement} name={'decrementElement'} onClick={clickHandler} className='counter'>
          -
        </div>  
        <h1>{counter}</h1>
        <div ref={incrementElement} name={'incrementElement'} onClick={clickHandler} className='counter'>
          +
        </div>
      </div>
      <button onClick={() => setPause(prev => !prev)}>{pause ? (paused.current ? "Continue" : "Start") : "Pause"}</button>
    </div>
  );
}

export default App;
