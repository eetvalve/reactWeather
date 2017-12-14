import actionTypes from '../actionTypes'

const initialState = () => {
    message=""
}


const actionMessage = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        default:
            return{
                state
            }
    }

}

export default actionMessage