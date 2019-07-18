import React from 'react';
import Input from './input';
import Welcome from './welcome'

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:[
                {type:'email', placeholder:'Email address'},
                {type:'password', placeholder:'Password'},
                {type:'submit', value:'Log In'}
            ],
            email:'',
            password:'',
            styleInputEmail:'1px solid transparent',
            styleInputPassword:'1px solid transparent',
            keyMail:'react@snowball.alevel.com',
            keyPass:'YouSimplyTheBest2019',
            disablSubm: true,
            errorHell: [ {er:'Invalid email address', warn:'Invalid email or password'}],
            error:'',
            errorStyle:'none',
            form:'block',
            logo:'none'
        }

    }

    setEmail(event){
        this.setState({
            email: event.target.value,
        })
        const mailSimb_A = this.state.email.indexOf('@');
        const mailSimb_B = this.state.email.indexOf('.')

        if(this.state.email.length == 0){
            this.setState({
                errorStyle:'block',
                styleInputEmail:'1px solid #FF473A',
                error: this.state.errorHell[0].er
            })
        }else if( mailSimb_A < 1 || mailSimb_B < 1){
            this.setState({
                errorStyle:'block',
                styleInputEmail:'1px solid #FF473A',
                error: this.state.errorHell[0].er
            })
        }else{
            this.setState({
                errorStyle:'none',
                styleInputEmail:'1px solid transparent',
                disablSubm: false
            })
        }
    }

    setPassword(event){
        this.setState({
            password: event.target.value,
            disablSubm: false
        })
    }
    clickForm(){
        if(this.state.email !== this.state.keyMail && this.state.password !== this.state.keyPass){
            this.setState({
                errorStyle:'block',
                error: this.state.errorHell[0].warn
            })
        }else{
            this.setState({
                errorStyle:'none',
                styleInputEmail:'1px solid transparent',
                buttonDisabled: true,
                form:'none',
                logo:'block'
            })
        }
    }
    

    render(){

        return(
            <div className="main-box">
                <div>
                    <div className="title-box">
                        YOUR <br/>
                        ART
                        MUSEUM
                    </div>

                    <address style={{display: this.state.form}} >
                        151 3rd St<br/>
                        San Francisco, CA 94103
                     </address>
                </div>

                <form style={{display: this.state.form}}>
                    <span className="error-block tx-left" style={{display: this.state.errorStyle}}>{this.state.error}</span>

                    <Input 
                        type={this.state.input[0].type}
                        name={this.state.input[0].placeholder} 
                        changeMail={this.setEmail.bind(this)}
                        styleBord={{border:this.state.styleInputEmail}}
                    /><br/>

                    <Input 
                        type={this.state.input[1].type} 
                        name={this.state.input[1].placeholder} 
                        changePassword={this.setPassword.bind(this)}
                        styleBord={{border:this.state.styleInputPassword,borderTop: '1px solid #000000'}}
                    />
                    <br/>
                    <div className='pass-text tx-right'>Forgot your password?</div>
                </form>

                <Welcome style={{display:this.state.logo}}/>

                <div className="button_group">
                    <input 
                        type={this.state.input[2].type} 
                        disabled={this.state.disablSubm} 
                        value={this.state.input[2].value} 
                        onClick={this.clickForm.bind(this)}
                    />

                    <div className='pass-text tx-left' style={{display: this.state.form}}>Don’t have an account?</div>
                </div>
            </div>
        )
    }
}


export default Post