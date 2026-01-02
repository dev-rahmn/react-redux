// reducer.js
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import favoritesReducer from '../slice/favoritesSlice';
const rootReducer = combineReducers({
products : productReducer,
favorites : favoritesReducer,
});

export default rootReducer;
