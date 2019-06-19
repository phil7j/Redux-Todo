import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Form from './components/Form'


function App(props) {
  return (
    <div className="App">
      <h1>Redux Todo</h1>
      <Todos />
      <Form />
    </div>
  );
}

export default App;
