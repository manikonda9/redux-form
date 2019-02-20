export const GET = "GET";
export const REQUSET = "REQUEST";
export const RECEIVE = "RECEIVE";

export const getData = channel => ({
  type: GET,
  channel
});
export const requestData = () => ({
  type: REQUSET
});
export const receivedData = json => ({
  type: RECEIVE,
  json: json
});
export const fetchPosts = () => dispatch => {
  dispatch(requestData());
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => {
      dispatch(receivedData(json));
    });
};
