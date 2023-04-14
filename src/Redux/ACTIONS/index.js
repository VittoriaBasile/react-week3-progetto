export const GET_ROCK = "GET_ROCK ";
export const GET_POP = "GET_POP ";
export const GET_HIP_HOP = " GET_HIP_POP";

export const getPopAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let songs = await response.json();
        dispatch({ type: GET_POP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRockAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let songs = await response.json();
        dispatch({ type: GET_ROCK, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getHipHopAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let songs = await response.json();
        dispatch({ type: GET_HIP_HOP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
