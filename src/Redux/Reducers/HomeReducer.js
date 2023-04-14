import { GET_POP } from "../ACTIONS";
import { GET_ROCK } from "../ACTIONS";
import { GET_HIP_HOP } from "../ACTIONS";
import { GET_SONG } from "../ACTIONS";
import { SEARCH_SONG } from "../ACTIONS";

const initialState = {
  pop: [],
  rock: [],
  hiphop: [],
  search: [],
  query: "",
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case GET_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_HIP_HOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    case GET_SONG:
      return {
        ...state,
        query: action.payload,
      };
    case SEARCH_SONG:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
