import axios from "axios";

const GET_ALL_PLAYER = "GET_ALL_PLAYER";

const GET_PLAYER = "GET_PLAYER";

const defaultPlayer = "";

const getAllPlayer = (data) => ({
  type: GET_ALL_PLAYER,
  data: data,
});

const getPlayer = (data) => ({
  type: GET_PLAYER,
  data: data,
});

export const fetchAllPlayer = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/player");
    } catch (error) {
      console.log("error", error);
    }
  };
};

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
