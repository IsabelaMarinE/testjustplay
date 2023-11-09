import {actionTypes} from './types';

export const selectCity = (payload) =>  ({
  type: actionTypes.SELECT_CITY,
  payload
});

export const selectPlay = (payload) => ({
  type: actionTypes.SELECT_PLAY,
  payload
})

export const setPlauyer = (payload) => ({
  type: actionTypes.SET_PLAYER,
  payload
})