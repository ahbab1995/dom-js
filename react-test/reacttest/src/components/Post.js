import React, { Component } from 'react';
import axios from 'axios';


class componentName extends Component {

    constructor(){
        super()
        this.state={
            postdata: "",
            postResult:""
        }
    }

    onChangeHeandler=(event)=>{
        var data = event.target.value
        this.setState={state:{postdata:data}}
    }

    onClickHeandler=()=>{
        axios.post(url:'http://localhost:3000/post',this.state.postdata)
        .then(res=>{
            this.setState(state:{postResult:res.data})
            alert(this.state.postResult)
        })
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                <input onChange={this.onChangeHeandler} type="text" />
                <button onClick={this.onClickHeandler}>Send</button>
            </div>
        );
    }
}

export default componentName;