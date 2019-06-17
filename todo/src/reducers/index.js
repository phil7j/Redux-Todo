const initialState = {
        todos: [
        {   value: 'Walk the dog.',
            completed: false
        },
        {   value: 'Take out the trash.',
            completed: false
        }
        ]
      };


export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          title: action.payload
        };
      default:
        return state;
    }
  };
