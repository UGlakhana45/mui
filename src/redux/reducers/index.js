import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';


export const reducers = combineReducers({
    auth : authSlice,
    counter : counterSlice,
});
