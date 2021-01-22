import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent/ChildComponent';

function App() {
  const [nameState, setNameState] = useState ('Adam')

  return(
    <div className="parentComponent">
      <div className="wrapper">
        <h1>Hai !</h1>
        <h1>Nama Saya Habil</h1>
        <h1>Dan Nama Bapak Saya, {nameState}</h1>
        <ChildComponent onChange={(value)=>{
          setNameState(value)
        }} />
      </div>
    </div>
  )
}

export default App