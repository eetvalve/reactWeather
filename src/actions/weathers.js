import * as actionTypes from '../actionTypes'
import axios from 'axios';

export const itemsHasErrored = bool => {
    return{
        type: actionTypes.ITEMS_HAS_ERRORED,
        hasErrored: bool
    }
}

export const itemsIsLoading = bool => {
    return{
        type: actionTypes.ITEMS_IS_LOADING,
        hasErrored: bool
    }
}

export const itemsFetchDataSuccess = (data, dates, cities) => {
    return{
        type: actionTypes.ITEMS_FETCH_DATA_SUCCESS,
        data,
        dates,
        cities
    }
}

/*
export const weathersFetchData = items => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch('/weatherByCity', {
            params: {
                data: items
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(items => {

              let dates = items[0].temperature.map(date => date.day )

                console.log(dates);

                dispatch(itemsFetchDataSuccess(items, dates))})
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}
*/

export const weathersFetchData = items =>{
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        axios.get('/weatherByCity', {
            params: {
                data: items
            }
        })
            .then(response => {

                let data = response.data;

                dispatch(itemsIsLoading(false));

                let dates = data[0].temperature.map(date => date.day )

                let cities = data.map( city => city.city)

                console.log(cities);
                console.log(dates);
                console.log(data);
                dispatch(itemsFetchDataSuccess(data, dates, cities));

            })
            .catch(() => dispatch(itemsHasErrored(true)))
    }
}

export const itemsUpdate = (data, dates) => {
    return{
        type: actionTypes.ITEMS_FETCH_DATA_SUCCESS,
        data,
        dates
    }
}

export const updateCities = cities => {
    return (dispatch) => {
        console.log(cities);

        let array = [];
        array = cities.split(',');

        //muuta cities arrayksi ja , pois

        dispatch(weathersFetchData(array));
    }
}