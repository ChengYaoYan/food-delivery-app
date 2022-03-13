import {configureStore} from '@reduxjs/toolkit';

import tabReducer from '../features/tab/tab-slice';
import {apiSlice} from '../features/dogs/dogs-api-slice';

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
