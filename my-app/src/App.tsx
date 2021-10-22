import React, { useState } from 'react';
import './App.css';
import { DiceViewer } from './components/DiceViewer';
import {Rolling} from './components/Rolling'
import {Container} from 'react-bootstrap'
import {Dice} from './dice'




function App():JSX.Element {
  const[digit,activeDigit]=useState<Dice["digit"]>() ;
  
  return (
    < Container className="App">

     
     <Rolling setDigit={activeDigit}></Rolling>
     <DiceViewer setPicture={digit}></DiceViewer>
     
   </Container>
  );
}

export default App;
