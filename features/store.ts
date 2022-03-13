import {createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import reactotron from '../ReactotronConfig';

const sagaMonitor = reactotron.createSagaMonitor?.();
const sagaMiddleware = createSagaMiddleware(sagaMonitor as any);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reactotron.createEnhancer?.() as any,
  ),
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
