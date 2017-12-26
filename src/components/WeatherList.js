import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { weathersFetchData } from '../actions/weathers';

import Temperatures from './temperatures'
import Days from './Days'
import '../assets/weatherlist.css'

class WeatherList extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.items);
    }

    render() {


        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        return (
            <div>
            <Days dates={this.props.dates}/>
            <ul className='highestUl'>
                {this.props.fullData.map((item) => (
                    <li className='cities' key={item.city}>
                        <h3 className="cityBold"> {item.city} </h3>

                        <Temperatures item={item}/>

                    </li>
                ))}
            </ul>
            </div>
        );
    }
}

WeatherList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    fullData: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        dates: state.weathers.dates,
        hasErrored: state.weathers.bool,
        isLoading: state.weathers.bool,
        fullData: state.weathers.fullData,
        items: state.weathers.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (items) => dispatch(weathersFetchData(items))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);