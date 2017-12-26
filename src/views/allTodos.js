import React from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const allTodos = () => {
    return(
        <div>
        <AddTodo/>
        <VisibleTodoList/>
        </div>
    )
}

export default allTodos;