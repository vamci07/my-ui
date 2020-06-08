import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import global from './global';

const initialState = {};

const middlewares = [thunk];
const rootReducer = combineReducers({
  global,
});

const persistConfig = {
  key: 'my-ui',
  storage,
  stateReconciler: autoMergeLevel2,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, initialState, enhancer);
export const persistor = persistStore(store);
