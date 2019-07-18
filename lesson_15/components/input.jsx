import React from 'react';



export default (props)=>{

    return(

        <input 
            type={props.type} 
            placeholder={props.name} 
            value={props.value}
            disabled={props.disabled}
            onChange={props.changeMail || props.changePassword}
            style={props.styleBord || {styles}}
        />

    )
}