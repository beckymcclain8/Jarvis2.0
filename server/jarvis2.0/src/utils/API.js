import axios from "axios";

const CMSBASEURL =
  "https://data.cms.gov/resource/ehrv-m9r6.json?$where=provider_zip_code";
const ZIPBASEURL = "https://www.zipcodeapi.com/rest/";
const ZIPAPIKEY =
  "6xsv3It4NIGhyQONSzZtJzG35hXBHQg6JJIqO6B7jnv6S8PlAkadIbi6Pg56RUQ2";
const CORS = "https://cors-anywhere.herokuapp.com/";

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

    return axios(CORS+MQURL+MQAPIKey+"&from=3322 E Mariposa St Phoenix AZ 85018&to=2528 E Campbell Ave Phoenix AZ 85016)", {
      method: 'GET', 
      headers: { 'x-requested-with': 'whatevs', 
                  'Content-Type': 'application/json', }, 
   
    });
  },
  
  //Map Exports
  locateUser: function() {
    return axios.get("/map");
  },

  locateNear: function(lnglat) {
    return axios.get("/map/:lnglat/results");
  }
};
