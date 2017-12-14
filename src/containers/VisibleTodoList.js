import { connect } from 'react-redux'
import { delTodo, editTodo, updateTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    const { messageValue, items } = state.todos;
    console.log(items);
    return {
        items: items,
        message: messageValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delTodoClick: id => {
            console.log(id);
            dispatch(delTodo(id))
        },
        editTodoClick: (id, editing) => {

            console.log(editing);
            dispatch(editTodo(id, editing))
        },
        updateTodo: (id, e) => {
           let text = e.target.value;
           console.log(text);
            dispatch(updateTodo(id, text))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList