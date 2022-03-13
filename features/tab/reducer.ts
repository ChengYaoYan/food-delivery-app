export enum TabActionType {
  'SET_SELECTED_TAB' = 'SET_SELECTED_TAB',
}

const initialState = {
  selectedTab: '',
};

const tab = (
  state = initialState,
  action: {type: TabActionType; payload: typeof initialState},
) => {
  switch (action.type) {
    case TabActionType.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    default:
      return state;
  }
};

export default tab;
