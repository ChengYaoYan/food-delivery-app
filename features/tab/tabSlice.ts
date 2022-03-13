import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SCREEN_DESCRIBES} from '../../constants';

type SCREEN_DESCRIBES_VALUE = `${SCREEN_DESCRIBES}`;

interface TabState {
  selectedTab: SCREEN_DESCRIBES_VALUE;
}

const initialState: TabState = {
  selectedTab: 'Home',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setSelectedTab(state, action: PayloadAction<SCREEN_DESCRIBES_VALUE>) {
      state.selectedTab = action.payload;
    },
  },
});

export const {setSelectedTab} = tabSlice.actions;
export default tabSlice.reducer;
