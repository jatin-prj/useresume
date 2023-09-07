import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ResumeDetails from "./Reducer/DataReducer";
const reducer = combineReducers({
  ResumeDetails,
});
export const Store = configureStore({
  reducer,
});
