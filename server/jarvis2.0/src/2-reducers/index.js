//This is the file in which all the other reducers will be combined for
//delivery to update the state of the app.
//Remember in the state tree there is only really one state
//That state is immutable in the way array are immutable.grows more than changes

import { combineReducers } from "redux";
import hospitals from "./hospitalReducer";
import markers from "./markersReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  hospitals,
  markers
});


