import { GET_ARTIST } from "../ACTIONS";

const initialState = {
  artist: null,
};

const ArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};

export default ArtistReducer;
