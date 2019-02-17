const initialState = {
  name: "Hello World"
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD":
    return {
      ...state,
      name : action.name
    };
    default:
    return {
      ...state,
      name : state.name
    }
  }
};

export default reducer;
