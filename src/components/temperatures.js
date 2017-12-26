import React from 'react'

import '../assets/weatherlist.css'

const Temperatures = props => {
    return(
    <ul className="innerUl">
        {props.item.temperature.map(temp => (

                <li className='tempList' key={temp.day}>

                    {temp.status === 'DANGER' ?

                        <p className="danger">  {temp.celcius} </p>
                        :
                        <p> {temp.celcius} </p>
                    }
                </li>
        ))}
    </ul>
    )
}

export default Temperatures