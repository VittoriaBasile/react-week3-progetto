import { GET_ARTIST, GET_ARTIST_ID } from "../ACTIONS";

const initialState = {
  artist: null,
  artistId: 0,
};

const ArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        album: action.payload,
      };
    case GET_ARTIST_ID:
      return {
        ...state,
        artistId: action.payload,
      };
    default:
      return state;
  }
};

export default ArtistReducer;
