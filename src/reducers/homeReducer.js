import { GET, REQUSET, RECEIVE } from "../actions/homeAction";
const initialState = {
  data: [],
  loading: true
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, channel: action.channel };
    case REQUSET:
      return { ...state, loading: state.loading };
    case RECEIVE:
      return { ...state, json: action.json, loading: !state.loading };
    default:
      return state;
  }
};

export default homeReducer;
