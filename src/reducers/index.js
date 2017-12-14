import {combineReducers} from 'redux'
import {todos, initialState} from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    initialState,
    visibilityFilter
})

export default todoApp;