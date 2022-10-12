import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCelsius, setFahrenheit, calc } from './features/calculator/calculatorSlice';


function CFcalculator() {
  const dispatch = useDispatch();

  return (
    <div className='f-100'>
      <input type="text" name='C' value={useSelector((state) => state.calculator.celsius)} onChange={(e) => dispatch(setCelsius(e.target.value))} />
      <button onClick={() => dispatch(calc())} >=</button>
      <input type="text" name='F' value={useSelector((state) => state.calculator.fahrenheit)} onChange={(e) => dispatch(setFahrenheit(e.target.value))} />
    </div>
  );
}


function App() {


  return (
    <div id='main'>
      <h1>°C és °F kalkulátor</h1>
      <CFcalculator></CFcalculator>
      <div >
        <h3 >Átszámítás °C és °F között</h3>
        <div>[°C] = ([°F] - 32) : 1,8</div>
        <div>[°F] = [°C] * 1,8 + 32</div>
      </div>
    </div>
  );
}

export default App;
