import * as actionTypes from '../actionTypes'

let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: actionTypes.ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: actionTypes.TOGGLE_TODO,
        id
    }
}

export const delTodo = id => {
    return {
        type: actionTypes.DEL,
        id
    }
}


export const showMessage = text => {
    return{
        type: actionTypes.SHOW_MESSAGE,
        text
    }
}

export const editTodo = (id, editing) => {
    return{
        type: actionTypes.EDIT_TODO,
        id,
        editing
    }
}

export const updateTodo = (id, text) => {
    return{
        type: actionTypes.UPDATE,
        id,
        text
    }
}