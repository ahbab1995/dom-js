import React, { Component } from 'react';
import axios from 'axios';

class CountryList extends Component {

    componentDidMount(){
        axios.get(url 'https://restcountries.herokuapp.com/api/v1')
             .then(res=>{
                 console.log(res.data)
             })
             .catch(err=>console.log(err))
    }



    render() {
        return (
            
        );
    }
}

export default CountryList;