import React from 'react';
import './welcom.css';




export default function Welcome(props){
    return(
        <div className='main-box'>
                <div className="group_1">
                    <div className="head-img">
                        <div className="elips-welcom"></div>
                    </div>
                    
                    <div className="headly">
                        <h2>Welcome!</h2>
                    </div>
                </div>
                <div className="input-group">
                    <input className="name" type="text"/>
                    <input className="user-name" type="email"/>
                    <div className="input-group_2">
                        <input className="country" type="text" />
                        <input className="age" type="text"/>
                    </div>
                </div>
                <button className='next-step' onClick={props.nextCange}>Next step</button>
            </div>
    )
}