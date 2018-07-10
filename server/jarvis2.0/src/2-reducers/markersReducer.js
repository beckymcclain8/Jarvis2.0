//This will holder the circumstances under which the markers
//on the map will have their state updated
//Connecting the actions to switch statements that will determine
//what action is taking place, recieving or getting MARKERS for the Map
//We will be combining initial state and the action to determing the next action
//in this file.
//Essentially in this file this is where action to state interaction is DESCRIBED and "lines in the sand are drawn".

import initalState from "./initialState.js";
import { FETCH_MARKERS, RECEIVE_MARKERS } from "../actions/types";

//This function takes two paramenters
//The first is initial state as it is recognized in the state tree initialState.js
//The second is the action that we are considering
//If the action type is FETCH then return the action
//If the action type is RECEIVE then return the updated state.
export default function markers(state = initalState.markers, action) {
  let newState;
  switch (action.type) {
    case FETCH_MARKERS:
      console.log("This is fetching the markers from the mongdb");
      return action;
    case RECEIVE_MARKERS:
      newState = action.markers;
      console.log("This is updating the new markers"); //Have to figure out how to update based on viewport change-TODO
      return newState;
    default:
      return state;
  }
}
