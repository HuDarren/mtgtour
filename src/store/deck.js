import axios from "axios";

const GET_ALL_DECK = "GET_ALL_DECK";

const GET_SINGLE_DECK = "GET_SINGLE_DECK";

const defaultDeck = [];

const getAllDeck = (data) => ({
  type: GET_ALL_DECK,
  data: data,
});

const getSingleDeck = (data) => ({
  type: GET_SINGLE_DECK,
  data: data,
});

export const fetchAllDeck = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/deck`);
      dispatch(getAllDeck(data));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const fetchSingleDeck = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/deck/${userId}`);
      dispatch(getSingleDeck(data));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export default function (state = defaultDeck, action) {
  switch (action.type) {
    case GET_ALL_DECK:
      return action.data;
    case GET_SINGLE_DECK:
      return action.data;
    default:
      return state;
  }
}
