import { GET_TRACK_LIST } from "../ACTIONS";

const initialState = {
  tracklist: null,
};

const tracklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACK_LIST:
      return {
        ...state,
        tracklist: action.payload,
      };
    default:
      return state;
  }
};

export default tracklistReducer;
