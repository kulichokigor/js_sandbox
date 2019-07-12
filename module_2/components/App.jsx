import React from 'react';
import ReadBook from './readBooks'
import Welcome from './welcom'
import Sorr from './sorr'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            post: <ReadBook onCange={this.onCange.bind(this)}/>,
            num: false
        }
    }


    onCange(){
        this.setState({
            post:<Welcome nextCange={this.nextCange.bind(this)}/>
        })
    }

    nextCange(){
        this.setState({
            post:<Sorr/>
        })
    }

    render(){
        return(
            <div>
                {this.state.post}
            </div>
        )
    }
}


export default App
