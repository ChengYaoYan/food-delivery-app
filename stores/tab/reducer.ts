import * as tabActionTypes from './actions';

const initialState = {
  selectedTab: '',
};

const tabReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case tabActionTypes.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};

export default tabReducer;
