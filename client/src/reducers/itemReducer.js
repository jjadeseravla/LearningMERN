//where actual state goes
import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Lettuce'},
    { id: uuid(), name: 'Vinegar'},
    { id: uuid(), name: 'Tomatoes'}
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state //return whatever is in items array
      };
    default:
      return state;
  }
}
