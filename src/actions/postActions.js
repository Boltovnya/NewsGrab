import { FETCH_POSTS, NEW_POST, TOP_UK, TOP_US, TOP_ZA } from "./types";

export const fetchPosts = (type) => (dispatch) => {
  fetch(`https://newsapi.org/v2/top-headlines?country=${type}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "X-Api-Key": "5630bdcd12d049868a069098a2260343",
    },
  })
    .then((res) => res.json())
    .then((posts) => {
      if (type === "gb") {
        type = TOP_UK;
      } else if (type === "us") {
        type = TOP_US;
      } else if (type === "za") {
        type = TOP_ZA;
      } else {
        type = FETCH_POSTS;
      }
      dispatch({
        type: type,
        payload: posts["articles"],
      });
    });
};

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};
