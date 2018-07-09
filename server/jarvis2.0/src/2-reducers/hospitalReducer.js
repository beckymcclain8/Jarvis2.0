//Connecting the actions to switch statements that will determine
//what action is taking place, recieving or getting
//We will be combining initial state and the action to determing the next action
//in this file.
//Essentially in this file this is where action to state interaction is DESCRIBED and "lines in the sand are drawn".
import initalState from "./initialState.js";
import { FETCH_HOSPITALS, RECEIVE_HOSPITALS } from "../1-actions/actionTypes";

export default function hospitals(state = initalState.hospitals, action) {
  let newState;
  switch (action.type) {
    case FETCH_HOSPITALS:
      console.log("This is the getting hospitals action");
      return action;
    case RECEIVE_HOSPITALS:
      newState = action.hospitals;
      console.log("This is receiving hospitals and growing the state tree");
      return newState;
    default:
      return state;
  }
}
