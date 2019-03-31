import {
  FETCH_POSTS,
  NEW_POST,
  TOP_UK,
  TOP_US,
  TOP_ZA
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case TOP_US:
      return {
        ...state,
        items: action.payload
      };
    case TOP_UK:
      return {
        ...state,
        items: action.payload
      };
    case TOP_ZA:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
