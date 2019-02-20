import { GET, REQUSET, RECEIVE } from "../actions/homeAction";
const initialState = {
  data: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, channel: action.channel };
    case REQUSET:
      return { ...state, loading: true };
    case RECEIVE:
      return { ...state, json: action.json, loading: false };
    default:
      return state;
  }
};

export default homeReducer;
