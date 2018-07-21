import axios from "axios";

const CMSBASEURL =
  "https://data.cms.gov/resource/ehrv-m9r6.json?$where=provider_zip_code";
const ZIPBASEURL = "https://www.zipcodeapi.com/rest/";
// const ZIPAPIKEY =
// "6xsv3It4NIGhyQONSzZtJzG35hXBHQg6JJIqO6B7jnv6S8PlAkadIbi6Pg56RUQ2";
const ZIPAPIKEY =
  "jTBXOsUWfV2PlgLc4eObXeW81teBoZhcH3tPeiFCh9oF3tj4l0rnrVDCRe7Zo5y3";
const CORS = "https://cors-anywhere.herokuapp.com/";

const MQAPIKey = "UVs4ACBHVSdUdsBxF6ZcdIv1OSmOsM61";
const MQURL = "http://www.mapquestapi.com/directions/v2/route?key=";

export default {
  getZips: function(query, radius) {
    return axios(
      CORS +
        ZIPBASEURL +
        ZIPAPIKEY +
        "/radius.json/" +
        query +
        "/" +
        radius +
        "/miles?minimal",
      {
        method: "GET",
        headers: {
          "x-requested-with": "nope",
          "Content-Type": "application/json"
        }
      }
    );
  },

  getLocalHospitals: function(zipRadius) {
    return axios.get(
      CMSBASEURL +
        " in(" +
        zipRadius +
        ")&drg_definition=039%20-%20EXTRACRANIAL%20PROCEDURES%20W/O%20CC/MCC&$order=average_covered_charges ASC&$limit=1"
    );
  },

  getMoreHospitals: function(zipRadius) {
    return axios.get(
      CMSBASEURL +
        " in(" +
        zipRadius +
        ") AND average_covered_charges < '50000'&drg_definition=039%20-%20EXTRACRANIAL%20PROCEDURES%20W/O%20CC/MCC&$order=average_covered_charges ASC&$limit=5"
    );
  },

  getDistance: function(userAddress, hospitalAddress) {
    return axios(
      CORS +
        MQURL +
        MQAPIKey +
        "&from=3322 E Mariposa St Phoenix AZ 85018&to=2528 E Campbell Ave Phoenix AZ 85016)",
      {
        method: "GET",
        headers: {
          "x-requested-with": "whatevs",
          "Content-Type": "application/json"
        }
      }
    );
  },

  saveHospital: function(hospital) {
    return axios({
      method: "POST",
      url: "/api/save_hospital",
      data: {
        hospital
      }
    });
  },

  deleteHospital: function(hospital) {
    return axios({
      method: "GET",
      url: "/api/delete_hospital",
      data: {
        hospital
      }
    });
  },

  getHospitals: function() {
    return axios({
      method: "GET",
      url: "/api/save_hospital"
    });
  }

  // //Map Exports
  // locateUser: function() {
  //   return axios.get("/map");
  // },

  // locateNear: function(lnglat) {
  //   return axios.get("/map/:lnglat/results");
  // }
};
