import React from 'react';
import Input from './input';
import img from '../img/welcome-image.png';



class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            input:[
                {title:"name"},
                {title: 'username'}
            ]
        }
    }
    
    render(){
        return(
            <div className="welcome-box">
                <div className="welcome-box-item">
                    <div className="welcome-image">
                        <img src={`${img}`}/>
                    </div>

                    <h2>Welcome!</h2>
                    
                    <div className="content-text">
                    Create your account to get started. After that,
                                    you can share books and make friends.
                    </div>
                </div>
                    <Input/>
                <div className="welcome-elips-top"></div>
                <div className="welcome-elips-middle"></div>
            </div>
            
        )
    }
}


export default Welcome