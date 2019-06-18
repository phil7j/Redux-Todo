

const initialState = {
        todos: [
        {   value: 'Walk the dog.',
            completed: false
        },
        {   value: 'Take out the trash.',
            completed: false
        },
        {
            value: 'Chill with the bros',
            completed: false
        }
        ]
      };


export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TODO':
        const newTodo = { value: action.payload, completed: false }
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      case 'TOGGLE_COMPLETE':
        return {
          ...state,
          todos: state.todos.map( (todo, index) => {
            if(index === action.payload){
              return {
                ...todo,
                completed: !todo.completed
              }
            } else {
              return todo;
            }
          })
        }
      default:
        return state;
    }
  };
