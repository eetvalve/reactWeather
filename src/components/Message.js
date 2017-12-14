import React from 'react'
import PropTypes from 'prop-types'

const Message = ({message}) => {
    return(
        <h1>{message}</h1>
    )
}

Message.propTypes = {
    message: PropTypes.string.isRequired
}

export default Message