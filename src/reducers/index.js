import {combineReducers} from 'redux'
import {todos, initialState} from './todos'
import visibilityFilter from './visibilityFilter'
import {weatherInitialState, weathers} from "./weathers";

const todoApp = combineReducers({
    todos,
    initialState,
    visibilityFilter,
    weatherInitialState,
    weathers
})

export default todoApp;