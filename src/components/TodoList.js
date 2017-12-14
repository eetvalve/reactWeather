import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'
import Message from './Message'



const TodoList = ({ items, delTodoClick, message, editTodoClick, updateTodo}) => (

    <div>
    <ul>
        {items.map((todo, i) => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => editTodoClick(todo.id, todo.editing)}
                delClick={() => delTodoClick(todo.id)}
                itemText={todo.text}
                updateItem={() => updateTodo(todo.id)}
                editing={todo.editing}
                id={todo.id}
            />

        ))}
    </ul>
    <Message message={message}/>
    </div>
)

TodoList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    delTodoClick: PropTypes.func.isRequired,
    editTodoClick: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
}

export default TodoList