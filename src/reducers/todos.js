import * as actionTypes from '../actionTypes'

export const initialState = {
    delValue: '',
    items: [],
    messageValue: ''
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                items: [...state.items,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false,
                        editing: false
                    }],
                messageValue: 'Lisätty'
            }

        case actionTypes.DEL:
            return {
                ...state,
                items: state.items.filter((item, i) => action.id !== item.id),
                messageValue: 'poistettu'
            }
        case actionTypes.EDIT_TODO:
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.id ? {...item, editing: true}
                            : item
                    )
                }
        case actionTypes.UPDATE:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id ? {...item, editing: false, text: action.text}
                        : item
                ),
                messageValue: 'Päivitetty'
            }
        default:
            return state
    }
}

export default todos;