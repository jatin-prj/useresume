import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ResumeDetails from "Redux/Reducer/DataReducer";
const reducer = combineReducers({
  ResumeDetails,
});
export const Store = configureStore({
  reducer,
});
