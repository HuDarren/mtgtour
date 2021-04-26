import axios from "axios";

const GET_ALL_TOURNAMENT = "GET_ALL_TOURNAMENT";

const defaultTournament = [];

const getAllTournament = (data) => ({
  type: GET_ALL_TOURNAMENT,
  data: data,
});

export const fetchAllTournament = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/tournament`);
      dispatch(getAllTournament(data));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export default function (state = defaultTournament, action) {
  switch (action.type) {
    case GET_ALL_TOURNAMENT:
      return action.data;
    default:
      return state;
  }
}
