export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"

export const addTodo =  todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}