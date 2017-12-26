import * as actionTypes from '../actionTypes'

export const weatherInitialState = {
    bool: false,
    items: ["turku", "helsinki", "sotkamo/vuokatti", "kolari"],
    dates: [],
    fullData: []
}

export const weathers = (state = weatherInitialState, action) => {
    switch (action.type){
        case actionTypes.ITEMS_HAS_ERRORED:
            return {
                ...state,
                bool: action.hasErrored
            }
        case actionTypes.ITEMS_IS_LOADING:
            return{
                ...state,
                bool: action.hasErrored
            }
        case actionTypes.ITEMS_FETCH_DATA_SUCCESS:
            return{
                ...state,
                fullData: action.data,
                dates: action.dates,
                items: action.cities
            }
        case actionTypes.UPDATE_CITIES:
            return{
                ...state,
                items: action.items
            }
        default:
            return state
    }
}

export default weathers;