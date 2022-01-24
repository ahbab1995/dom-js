import React, { Component } from 'react';

class From extends Component {

    constructor() {
        super()

        this.state = {
            fname: " ",
            lname: "",
            email: "",
            mobile: ""
        }
    }

    onCheckHandelar = (event) => {
        var newName = event.target.name;
        var newValue = event.target.value;
        this.setState({[newName]:newValue})
    }

    render() {
        return (
            <div>
            <h4>First Nmae: {this.state.fname}</h4>
            <h4>Last Nmae: {this.state.lname}</h4>
            <h4>Email: {this.state.email}</h4>
            <h4>Mobile Number: {this.state.mobile}</h4>
                <form>
                <input name='fname' onChange={this.onCheckHandelar} type='text' placeholder='Your FastName'></input> <br/>
                <input name='lname' onChange={this.onCheckHandelar} type='text' placeholder='Your LastName'></input> <br/>
                <input name='email' onChange={this.onCheckHandelar} type='text' placeholder='Your Email Addres'></input> <br/>
                <input name='mobile' onChange={this.onCheckHandelar} type='text' placeholder='Your Mobile Number'></input> <br/>
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default From;