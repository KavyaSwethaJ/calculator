import React, {useState} from 'react';
import * as math from 'mathjs';
import "./App.css"
const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const input = e.target.name;
    const sanitizedInput = input === '×' ? '*' : input === '÷' ? '/' : input;
    setResult((prevResult) => prevResult.concat(sanitizedInput));
  };

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0,-1));
  }
 
  const calculate = () => {
    try {
      setResult(math.evaluate(result).toString());
      console.log(math.evaluate(result));
    } catch (err) {  
      setResult('Error');
    }
  };

  return (
    <>
      <div className='container'>
        <form> 
          <input type="text" value={result} />
        </form>
        <div className='keypad'>
          <button onClick={clear} id = "clear">C</button>
          <button name = "%" onClick={handleClick} id = "modulo">%</button>
          <button onClick={backspace} id = "backspace">⌫</button>
          <button name = "÷" onClick={handleClick} id = "highlight">&divide;</button>
          <button name = "7" onClick={handleClick}>7</button>
          <button name = "8" onClick={handleClick}>8</button>
          <button name = "9" onClick={handleClick}>9</button>
          <button name = "×" onClick={handleClick} id = "highlight">&times;</button>
          <button name = "4" onClick={handleClick}>4</button>
          <button name = "5" onClick={handleClick}>5</button>
          <button name = "6" onClick={handleClick}>6</button>
          <button name = "-" onClick={handleClick} id = "highlight">&ndash;</button>
          <button name = "1" onClick={handleClick}>1</button>
          <button name = "2" onClick={handleClick}>2</button>
          <button name = "3" onClick={handleClick}>3</button>
          <button name = "+" onClick={handleClick} id = "highlight">+</button>
          <button name = "0" onClick={handleClick}>0</button>
          <button name = "00" onClick={handleClick}>00</button>
          <button name = "." onClick={handleClick}>.</button>
          <button onClick={calculate} id = "result">=</button>
        </div>
      </div>
    </>
  );
}

export default App;