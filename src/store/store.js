import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterSlice from './filterSlice';

const reducers = combineReducers({
    filter: filterSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
