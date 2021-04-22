import axios from "axios";

const GET_PLAYER = "GET_PLAYER";

const defaultPlayer = "";

const getPlayer = (data) => ({
  type: GET_PLAYER,
  data: data,
});

export const fetchPlayer = (userid) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/player/${userid}`);
      dispatch(getPlayer(data));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export default function (state = defaultPlayer, action) {
  switch (action.type) {
    case GET_PLAYER:
      return action.data;
    default:
      return state;
  }
}
