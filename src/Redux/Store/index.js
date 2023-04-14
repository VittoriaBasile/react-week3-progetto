import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../Reducers/HomeReducer.js";

const rootReducer = combineReducers({
  home: HomeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
