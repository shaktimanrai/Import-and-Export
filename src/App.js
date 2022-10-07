import React from 'react';
 import myfav, { favprog, myName, myNames } from './components/Header';
// import './App.css';
// import * as ques from './components/Header';


function App() {
  return (
    <>
      <ol>
        <li>Shakti</li>
        <li>{myfav}</li>
        <li>{favprog}</li>
        <li>{myName()}</li>
        <li>{myNames()}</li>

        {/* <li>Shakti</li>
        <li>{ques.default}</li>
        <li>{ques.favprog}</li>
        <li>{ques.myName()}</li>
        <li>{ques.myNames()}</li> */}
      </ol>
    </>

  );
};

export default App;
