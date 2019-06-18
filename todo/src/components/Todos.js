import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleComplete } from '../actions'


export class Todos extends Component {

    todoToggler = (e, index) => {
        e.preventDefault();
        this.props.toggleComplete(index);
    }

    render() {
        return (
            <div>
                {this.props.todos.map( (todo, index) => (
                <p className={todo.completed === true ? 'complete todo' : 'todo' } onClick={e => this.todoToggler(e,index)} key={index}>{todo.value}</p>) )}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

  export default connect(
    mapStateToProps,
    { toggleComplete } // same as { changeTitle: changeTitle } (put in actions here)
  )(Todos);