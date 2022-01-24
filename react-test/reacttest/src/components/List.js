import React, { Component } from 'react';

class List extends Component {

     selectFun = (data)=>{
        return <option>{data}</option>
      }
    render() {

        const name=['Ahbab','Arman','Ashref','Ribon','Jabad']

        const dataItems= name.map(this.selectFun)  

        return (
            <div>
                <select>{dataItems}</select>
            </div>
        );
    }
}

export default List;