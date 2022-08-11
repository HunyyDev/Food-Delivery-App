import {GET_FOOD_DATA} from './actions';

const foodState = []

const foodReducer = (state = foodState, action) => {
  switch (action.type) {
    case GET_FOOD_DATA:
      return [...action.payload]
  
    default:
      return state;
  }
}

export default foodReducer;
