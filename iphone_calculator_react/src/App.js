import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { buttonCommand, historyToggle } from './features/calculatorSlice'

function Button({ value }) {
  const dispatch = useDispatch();
  return (
    <div className="button-container" style={{ flex: (value == 0 && '0 50%') }}>
      <button className={((value === "/" || value === "*" || value === "-" || value === "+" || value === ".") ? 'operation' : '')} name={value} style={{ width: (value == 0 && '140px'), borderRadius: (value == 0 && '40px') }} onClick={(e) => dispatch(buttonCommand(e.target.name))}>{value}</button>
    </div>
  )
}

function Display() {
  return (<div className='display-container'>
    <input className='history' type="text" value={useSelector((state) => state.calculator.lastValueString)} readOnly />
    <input className='display' type="text" value={useSelector((state) => state.calculator.value)} readOnly />
  </div>);
}

function HistoryModal() {

  const history = useSelector((state) => state.calculator.history);
  const show = useSelector((state) => state.calculator.showHistory);
  return (
    <>
      {show ? <div className="modal" >
        {history && history.map((item, index) => {
          return (
            <div key={index}>{index} - {item}</div>
          )
        })}
      </div> : ""}
    </>
  )
}


function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button className='history-toggle' onClick={() => dispatch(historyToggle())}>Előzmények</button>
      <HistoryModal></HistoryModal>
      <div className="App">
        <Display></Display>
        <div className="input-group">
          <Button value='AC' />
          <Button value='+/-' />
          <Button value='%' />
          <Button value='/' />
          <Button value='7' />
          <Button value='8' />
          <Button value='9' />
          <Button value='*' />
          <Button value='4' />
          <Button value='5' />
          <Button value='6' />
          <Button value='-' />
          <Button value='1' />
          <Button value='2' />
          <Button value='3' />
          <Button value='+' />
          <Button value='0' />
          <Button value='=' />
          <Button value='.' />

        </div>
      </div>
    </>

  );
}

export default App;
