import {actionTypes} from '../actions/types';

const initialState = {
  city: [],
  player: [],
  play: []
}

const reducerObject = (state, payload) => ({
  [actionTypes.SELECT_CITY] : {
    ...state,
    city: payload
  },
  [actionTypes.SELECT_PLAY] : {
    ...state,
    play: payload    
  },
  [actionTypes.SET_PLAYER] : {
    ...state, 
    player: payload
  }
});

const reducer = (state = initialState, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export {reducer};