import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../Reducers/HomeReducer.js";
import AlbumReducer from "../Reducers/AlbumReducer.js";
import ArtistReducer from "../Reducers/ArtistReducer.js";
import tracklistReducer from "../Reducers/TrackListReducer.js";

const rootReducer = combineReducers({
  home: HomeReducer,
  album: AlbumReducer,
  artist: ArtistReducer,
  tracks: tracklistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
