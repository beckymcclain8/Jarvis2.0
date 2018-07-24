// import axios from "axios";
import * as types from "./actionTypes";

//Setting this up with functions that will return json for Hospitals and recieving markers updates

//recieve hospital action stored as json
export function receiveHospitals(json) {
  return { type: types.RECEIVE_HOSPITALS, hospitals: json.hospitals };
}

//Need to write axios statement to get
//Hospitals from the API - TODO
// export function getHospitals() {
//   //   axios.get("/search",{
//   //       params:{}
//   //   }).then(function(res){
//   //       res.json
//   //   }
// }
