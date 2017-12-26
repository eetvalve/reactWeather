import React from 'react'
import { connect } from 'react-redux'
import { updateCities } from '../actions/weathers'
import PropTypes from 'prop-types'
import '../assets/weatherlist.css'


class InputCities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: this.props.items}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateCities(this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <input type="text" value={this.state.value} onChange={this.handleChange} className="inputWidth"/>

                <input type="submit" value="Hae/päivitä"  />
            </form>
        )
    }
}


InputCities.propTypes = {
    items: PropTypes.array.isRequired,
}


const mapStateToProps = state => {
    return {
        items: state.weathers.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCities: (cities) => {
            console.log(cities);
            dispatch(updateCities(cities))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputCities)

