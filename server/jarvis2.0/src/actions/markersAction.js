// import axios from "axios";
import * as types from "./actionTypes";

//Setting this up with functions that will return json for markers and recieving markers updates

export function receiveMarkers(json) {
  return { type: types.RECEIVE_MARKERS, markers: json.markers };
}

//Need to write axios statement to get
//markers from the mongodb - TODO

export function getMarkers() {
  //   axios("/map",{
  //       params:{}
  //   }).then(function(res){
  //       res.json
  //   }
}
