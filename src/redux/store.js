import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducers/authSlice';

export const store = configureStore({
    reducer : {
        trial : counterReducer,
        
        
    },
})