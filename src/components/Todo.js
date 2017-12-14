import React from 'react'
import PropTypes from 'prop-types'

import EditTodo from './EditTodo'
import todos from "../reducers/todos";

const Todo = ({ onClick, completed, text, props, delClick, updateItem, itemText, editing, id }) => (
<div>
    {editing ?
        <EditTodo id={id} itemText={itemText}/>
         :
        <li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >

       {text}




       <button onClick={delClick}> Poista</button>
    </li> }
</div>

)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo