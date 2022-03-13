export enum DateActionType {
  'SET_SELECTED_TAB' = 'SET_SELECTED_TAB',
}

const initialState = {
  selectedTab: '',
};

const Date = (
  state = initialState,
  action: {type: DateActionType; payload: typeof initialState},
) => {
  switch (action.type) {
    case DateActionType.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    default:
      return state;
  }
};

export default Date;
