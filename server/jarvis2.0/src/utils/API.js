import axios from "axios";

const BASEURL = "https://data.cms.gov/resource/ehrv-m9r6.json?$where=provider_zip_code";

export default {
  search: function(query) {
    return axios.get(BASEURL + " in("+query+")");
  }
};
