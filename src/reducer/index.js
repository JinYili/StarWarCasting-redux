import nextUrlReducer from "./nextUrl";
import listReducer from "./list";
import previousUrlReducer from "./previousUrl";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  list: listReducer,
  nextUrl: nextUrlReducer,
  previousUrl: previousUrlReducer
});

export default allReducers;
