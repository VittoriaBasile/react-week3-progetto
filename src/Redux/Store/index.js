import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../Reducers/HomeReducer.js";
import AlbumReducer from "../Reducers/AlbumReducer.js";

const rootReducer = combineReducers({
  home: HomeReducer,
  album: AlbumReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
