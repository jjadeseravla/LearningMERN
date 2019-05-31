import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs'},
      { id: uuid(), name: 'Lettuce'},
      { id: uuid(), name: 'Vinegar'},
      { id: uuid(), name: 'Tomatoes'}
    ]
  }
  render() {
    const { items } = this.state;
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name) {
                this.setState(state => ({
                  items: [...state.items, { id: uuid(), name}]
              }));
            }
          }}
        >Add Item</Button>
      </Container>
    );
  }
}

export default ShoppingList;
