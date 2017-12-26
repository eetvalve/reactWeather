import React from 'react'

const Days = props => {
    return(
        <ul className='dayList'>
        {props.dates.map(day => (
            <li className='tempList' key={day}>
                <h3 className="cityBold"> {day} </h3>
            </li>
        ))}
</ul>
    )
}

export default Days