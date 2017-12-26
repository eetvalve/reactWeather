import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import WeatherList from './components/WeatherList'
import allTodos from './views/allTodos'
import weatherContainer from './views/weatherCointainer'



function Header() {
    return(
        <Router>
            <div>

                <ul className="link_list">
                    <li className="linkTo"><Link to={'/'}>todolist</Link></li>
                    <li className="linkTo"><Link to={'/weather'}>weather</Link></li>
                </ul>






                <Switch>
                    <Route exact path='/' component={allTodos} />
                    <Route exact path='/weather' component={weatherContainer} />
                </Switch>

            </div>
        </Router>
    )
}

export default Header;
