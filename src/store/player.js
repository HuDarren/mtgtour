/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import history from "../history";

const GET_ALL_PLAYER = "GET_ALL_PLAYER";

const GET_PLAYER = "GET_PLAYER";

const REMOVE_PLAYER = "REMOVE_PLAYER";

const defaultPlayer = {};

const getAllPlayer = (data) => ({
  type: GET_ALL_PLAYER,
  data: data,
});

const getPlayer = (data) => ({
  type: GET_PLAYER,
  data: data,
});

const removePlayer = () => ({ type: REMOVE_PLAYER });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getPlayer(res.data || defaultPlayer));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`/auth/${method}`, { email, password });
  } catch (authError) {
    return dispatch(getPlayer({ error: authError }));
  }

  try {
    dispatch(getPlayer(res.data));
    history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post("/auth/logout");
    dispatch(removePlayer());
    history.push("/login");
  } catch (err) {
    console.error(err);
  }
};

export const fetchAllPlayer = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/player");
      dispatch(getAllPlayer(data));
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
    case GET_ALL_PLAYER:
      return action.data;
    default:
      return state;
  }
}
