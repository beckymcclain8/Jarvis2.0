import axios from "axios";

const CMSBASEURL = "https://data.cms.gov/resource/ehrv-m9r6.json?$where=provider_zip_code";
const ZIPBASEURL = "https://www.zipcodeapi.com/rest/"
const ZIPAPIKEY = "6xsv3It4NIGhyQONSzZtJzG35hXBHQg6JJIqO6B7jnv6S8PlAkadIbi6Pg56RUQ2";
const CORS = "https://cors-anywhere.herokuapp.com/"



export default {


  getZips: function(query, radius) {
    return axios(CORS+ZIPBASEURL+ZIPAPIKEY+"/radius.json/"+query+"/"+radius+"/miles?minimal", {
      method: 'GET', 
      headers: { 'x-requested-with': 'whatever', 
                  'Content-Type': 'application/json', }, 
   
    })
  },
  
  getLocalHospitals: function(zipRadius) {

    return axios.get(CMSBASEURL + " in("+zipRadius+")&drg_definition=039%20-%20EXTRACRANIAL%20PROCEDURES%20W/O%20CC/MCC&$order=average_covered_charges ASC&$limit=1");
  },


  getMoreHospitals: function(zipRadius) {

    return axios.get(CMSBASEURL + " in("+zipRadius+")&drg_definition=039%20-%20EXTRACRANIAL%20PROCEDURES%20W/O%20CC/MCC&$order=average_covered_charges ASC&$limit=5");
  }
}
