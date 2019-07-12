import React from 'react';
import './sorr.css';


class Sorr extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='main-box'>
                <div className="group_1">
                    <div className="head-img">
                        <div className="elips-welcom"></div>
                    </div>
                    
                    <div className="headly">
                        <h2>Soryyy!</h2>
                    </div>
                </div>
                <div className="input-group">
                    <input className="name" type="text"/>
                    <input className="user-name" type="email"/>
                    <div className="input-group_2">
                        <input className="country" type="text"/>
                        <input className="age" type="text"/>
                    </div>
                </div>
                <button className='next-step'>STEP STOP</button>
            </div>
        )
    }
}


export default Sorr 