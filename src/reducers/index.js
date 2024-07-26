// src/reducers/index.js
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  data: dataReducer,
  profile: profileReducer,
});
