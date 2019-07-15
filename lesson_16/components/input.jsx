import React from 'react';
import Radium from 'radium';
import axios from 'axios';

class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'ducawizard@gmail.com',
            username:'ducawizard@gmail.com',
            country:'Romania',
            age:27,
            status:'',
            inputStatus:''
        }

        
    }

    inputName(event){
        if(event.target.value.length >= 2){
            this.setState({
                name: event.target.value
            })
        }
    }

    inputUserName(event){
        if(event.target.value.length >= 2){
            this.setState({
                username: event.target.value
            })
        }
    }

    // getAxiosData(\){
    //     axios.get(`https://authserver.worldthirteen.now.sh/check_username?username=react`)
    //         .then(res => {
    //             if(res.data.status!=='OK'){
    //                 this.setState({inputStatus:'border: none; border-bottom: 3px solid rgba(210, 0, 13, 0.8);'})
    //             }else{this.setState({inputStatus:'border: none; border-bottom: 3px solid  #00D23A;'})}

    //         })
    //         // .then(()=>{
    //         //     console.log(this.state)
    //         // })
    //         .catch(err => console.log(err));
    // }

    render(){

        console.log(this.state.status);

        const nameClass = ['style-input'];
        const userClass = ['style-input'];
        const countryClass = ['else-style-input country-rigth'];
        const ageClass = ['else-style-input']

        if(this.state.name === ''){
            nameClass.push('style-input-green')
        }else if (this.state.name.length <= 2) {
            nameClass.push('style-input-red')
        }else{
            nameClass.push('style-input-green')
        }

        if(!this.state.username){
            userClass.push('style-input-green')
        }else if (this.state.username.length <= 2) {
            userClass.push('style-input-red')
        }else{
            userClass.push('style-input-green')
        }

        return(
            <div>
                <div className="input-group">
                    <div className="input-text">name</div>
                    <input 
                        type="text"
                        onChange={this.inputName.bind(this)}
                        className={nameClass.join(' ')}
                        placeholder={this.state.name}
                    />
                </div>
                <div className="input-group">
                    <div className="input-text">username</div>
                 <input
                    type="text"
                    onChange={this.inputUserName.bind(this)}
                    className={userClass.join(' ')}
                    placeholder={this.state.username}
                /></div>
                <div className="input-group">
                    <div className="float-left">
                        <div className="input-text">country</div>
                        <input className={countryClass.join(' ')} type="text" placeholder={this.state.country}/>
                    </div>

                    <div className="float-left">
                        <div className="input-text">age</div>
                        <input className={ageClass.join(' ')} type="number" placeholder={this.state.age}/>
                    </div>
                </div>
                <button
                    onClick={this.getAxiosData}
                    className="btn-next-step">next step</button>
                <div className="content-text">Already have an account? <b><a href="">Login</a></b></div>
            </div>
        )
    } 
}


export default Radium(Input)