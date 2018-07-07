import React from 'react';
import axios from 'axios';

export default class Result extends React.Component {
  state = {
    hospitals: []
  }

  componentDidMount() {
    axios.get("https://data.cms.gov/resource/ehrv-m9r6.json?$where=provider_zip_code in("+userzips+")")
      .then(res => {
        const hospitals = res.data;
        this.setState({ hospitals });
      })
  }

  render() {
    return (
      <ul>
        { this.state.hospitals.map(hospital => <li>{hospital.provider_name}</li>
    <li>{hospital.provider_street_address}, {hospital.provider_state} {hospital.provider_zip_code}</li>}
      </ul>
    )
  }
}