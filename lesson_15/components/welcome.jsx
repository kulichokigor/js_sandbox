import React from 'react';
import logo from '../img/image.svg'


export default (props)=>{
    return(

            <div style={props.style}>
                <img src={`${logo}`} />
                <div className="welcome">Welcome back, <b>React</b></div>
            </div>
    )
}