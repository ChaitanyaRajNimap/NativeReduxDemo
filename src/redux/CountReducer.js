import {INCREMENT_COUNT} from './CountActionType';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default countReducer;
