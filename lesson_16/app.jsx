import React from 'react';
import ReadBook from './components/post_1';
import Welcome from './components/post_2';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: <ReadBook changePost={this.changePost.bind(this)}/>
        }
    }

    changePost(){
        this.setState({
            post: <Welcome/>
        })
    }

    render(){
        return(
            <div>{this.state.post}</div>
        )
    }
}

export default App