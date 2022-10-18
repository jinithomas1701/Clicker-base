import {ADD_USER_INFO} from '../actions/types';

const UserReducer = (state = {}, action) => {
  let newState = {...state};
  switch (action.type) {
    case ADD_USER_INFO:
      newState.info = action.payload.userInfo;
      return newState;
    default:
      return newState;
  }
};
export default UserReducer;
