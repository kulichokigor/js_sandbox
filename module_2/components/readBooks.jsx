import React from 'react';
import './index.css';
import img from '../img/Group.png'



export default function ReadBook (props){
    return(
        <div className='main-box'>
        <div>
            <div className='cirkle_1'></div>
            <div className='cirkle_2'></div>
            <div className='cirkle_3'></div>
        </div>
        <div className="group_2">
            <div className='elips-main'>
                <img className="group-img" src={`${img}`}/>
            </div>
            <div></div>
        </div>
            <div className="head-group">
                <h2>Read Books</h2>
            </div>
            <div className="text-box">
            <span className="text">Create your account to get started. After that,
                    you can share books and make friends.</span>
            </div>
            <div className="group_6" onClick={props.onCange}>
                <div className="elips_6"></div>
                <div className="img"></div>
            </div>
        </div>
    )
}