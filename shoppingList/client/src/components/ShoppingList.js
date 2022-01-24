import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class ShoppingList extends Component {
    state = {
        item: [
            {id: uuid(),name: 'Ahbab'},
            {id: uuid(),name: 'ami'},
            {id: uuid(),name: 'Md'},
            {id: uuid(),name: 'Eggs'},
        ]
    }

    render(){
        const { items } = this.state
        return(
            <Container>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={()=>{
                    const name = prompt('Enter Your Nmae');
                    if(name){
                       this.setState(state => ({
                           item:[...state.item,{id:uuid(), name}]
                       }))     
                    }
                }}
                >
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map((id,name)=>{
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button className='remove-btn' color='danger' size='sm' onClick={()=>{
                                    this.setState(state=>{items:state.items.filter(item=>item.id !== id)})
                                }}
                                >
                                &times;
                                </Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        })}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }
}


export default ShoppingList;