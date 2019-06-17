import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Redux Todo</h1>
      {props.todos.map( todo => <h3>{todo.value}</h3> )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {} // same as { changeTitle: changeTitle } (put in actions here)
)(App);
