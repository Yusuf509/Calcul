import { useState } from 'react';
import './App.css';
function App() {
  const [result,setResulte]=useState("")
  const handelClick = (e)=>{
    setResulte(result.concat(e.target.name))
  }
  const clear = ()=>{
    setResulte("")
  }
  const backspace =()=>{
    setResulte(result.slice(0,result.length-1))
  }
  const calculate =()=>{
    try{

      setResulte(eval(result).toString())
    }
    catch(err){
      setResulte("Error")
    }
  }
  return (
    <div className="App">
      <form>
        <input type="text" value={result}/>
      </form>
      <div className="keypad">
        <button className='highlight' id="clear" onClick={clear}>clear</button>
        <button className='highlight'  id="backspace" onClick={backspace} >C</button>
        <button name="/" className='highlight'  onClick={handelClick}>&divide;</button>
        <button name="7" onClick={handelClick}>7</button>
        <button name="7" onClick={handelClick}>8</button>
        <button name="9" onClick={handelClick}>9</button>
        <button name="*" className='highlight'  onClick={handelClick}>&times;</button>
        <button name="4" onClick={handelClick}>4</button>
        <button name="5" onClick={handelClick}>5</button>
        <button name="6" onClick={handelClick}>6</button>
        <button name="-" className='highlight'  onClick={handelClick}>&ndash;</button>
        <button name="1" onClick={handelClick}>1</button>
        <button name="2" onClick={handelClick}>2</button>
        <button name="3" onClick={handelClick}>3</button>
        <button name="+" className='highlight' onClick={handelClick}>+</button>
        <button name="0" onClick={handelClick}>0</button>
        <button name="." onClick={handelClick}>.</button>
        <button className='highlight'  name="="  onClick={calculate} id="result">=</button>

      </div>
    </div>
  );
  
}


export default App