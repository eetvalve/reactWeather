import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import todoApp from './reducers/index';


const Root = (props) => {

    let store = createStore(todoApp);

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default Root;