import { GET_POP } from "../ACTIONS";
import { GET_ROCK } from "../ACTIONS";
import { GET_HIP_HOP } from "../ACTIONS";

const initialState = {
  pop: [],
  rock: [],
  hiphop: [],
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
    default:
      return state;
  }
};

export default HomeReducer;
