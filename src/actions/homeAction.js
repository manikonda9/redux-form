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
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => {
      setTimeout(function() {
        dispatch(receivedData(json));
      }, 2000);
    });
};
