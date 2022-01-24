import React, { Component } from 'react';

class Text extends Component {
constructor(){
    super()
    this.state = {
        deco : "",
        userInput : ""
    }
}

onChangeHandelar=(event)=>{
    var mytext = event.target.value
    this.setState({userInput:mytext})
}
    render() {
        return (
            <div>
                <textarea placeholder="Type your text" onChange={this.onChangeHandelar} value={this.state.deco}></textarea>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Text;