import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions'

export class Form extends Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    }

    handleNewTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    render() {
        return (
            <div>

                    <input onChange={this.handleChanges} placeholder="Add todo here" value={this.state.newTodo} />
                    <button onClick={this.handleNewTodo}>Add</button>

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
    { addTodo } // same as { changeTitle: changeTitle } (put in actions here)
  )(Form);
