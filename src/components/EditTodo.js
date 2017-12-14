import React from 'react'
import { connect } from 'react-redux'
import { updateTodo } from '../actions'
import PropTypes from 'prop-types'


class EditTodo extends React.Component {
    constructor(props){
        super(props);

        this.state = {value: this.props.itemText}

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
        this.props.updateTodo(this.props.id, this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}


EditTodo.propTypes = {
    id: PropTypes.number.isRequired,
    itemText: PropTypes.string.isRequired
}


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: (id, text) => {

            console.log(text);
            dispatch(updateTodo(id, text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodo)

