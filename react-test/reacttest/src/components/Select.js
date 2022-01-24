import React, { Component } from 'react';

class SelectOptcion extends Component {

    constructor(){
        super();
        this.state = {
            value:{
                c0:' ',
                c1:'Sylhet',
                c2:'Dhaka',
                c3:'Rongpur',
                c4:'Rajshahi',
                show:'',
                auto: 'Sylhet'
            }             
        }
    }

    onChangehandelar = (event)=>{
        var SelectValue = event.target.value;
        this.setState({show:SelectValue, auto:SelectValue})
    }

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangehandelar} value={this.state.value.auto} >
                    <option>{this.state.value.c1}</option>
                    <option>{this.state.value.c2}</option>
                    <option>{this.state.value.c3}</option>
                    <option>{this.state.value.c4}</option>
                </select>
            </div>
        )
    }
}

export default SelectOptcion;