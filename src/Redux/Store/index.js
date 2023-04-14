import { combineReducers, configureStore } from "@reduxjs/toolkit";
import firstReducer from "../Reducers/firstReducer.js";

const rootReducer = combineReducers({
  first: firstReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
