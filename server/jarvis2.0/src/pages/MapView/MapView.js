import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import "./MapView.css";
import "./MapViewStyle.css";
import API from "../../utils/API";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// class WrappedMarker extends Component {
//   render() {
//      //Given by the `Map` component
//     return (
//       <Marker
//         map={map} /* pass down to Marker */
//         layerContainer={layerContainer} /* pass down to Marker */
//         position={[51.505, -0.09]} //This will render the lat/long from the geoJSON TODO|
//         //Test with declaring position as this.props, and then using map() to produce an array of markers on the screen
//         //Then create route to findAll({}) on a test GeoJSON layer that I load up.
//       />
//     );
//   }
// }

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      markers: [[51.505, -0.09], [51.505, -0.08], [51.505, -0.07]],
      popups: "Cool hospital info",
      center: [],
      results: []
    };
  }

  componentDidMount() {
    this.locateUser();
    this.locateNear();
  }

  locateUser = () => {
    API.locateUser()
      .then(res => {
        console.log(
          "THE USER HAS BEEN LOCATED FROM THE MAPVIEW.JS from the locate user method"
        );
        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  };

  locateNear = () => {
    API.locateNear()
      .then(res => {
        console.log(
          "THE USER HAS BEEN LOCATED FROM THE MAPVIEW.JS from the locateNear method"
        );
      })
      .catch(err => console.log(err));
  };

  // locateNear = lnglat => {
  //   API.locateNear(lnglat)
  //     .then(res => {
  //       console.log(
  //         "THE USER HAS BEEN LOCATED FROM THE MAPVIEW.JS from the locateNear method"
  //       );
  //       this.setState({
  //         markers: [[61.505, -0.09], [61.505, -0.08], [61.505, -0.07]],
  //         center: [61.505, -0.09]
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };
  //handleViewPortChange- TODO
  //handleRadiusSearch-TODO

  // handleUpdateViewport = (map-center, markers)=>{
  //   clear(markers);
  //   setState({map-center: new bounding box from viewport)}
  //   API.radiusSearch(map-center).then(setState({markers: radiusResults});

  render() {
    // const { map, layerContainer } = this.props;
    // const { map } = this.leafletElement;
    // const center = map.locate({ setView: true, maxZoom: 16 });
    console.log("The results from the locateNear search", this.state.results);
    console.log("The results from setState are", this.state.markers);
    console.log("The new coordinates from the map are", this.state.center);
    return (
      <div className="container">
        <Navbar />
        <Header />
        {/* Map will center on the the persons location- TODO */}
        <Map id="map" center={[51.505, -0.09]} zoom={13}>
          {/* {map.locate({ setView: true, maxZoom: 16 })} */}

          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Take in position as an argument and then map through the state array and called each elements lat/log with the idx operator */}
          {this.state.markers.map((position, idx) => (
            <Marker key={`marker-${idx}`} position={position}>
              <Popup>
                <span>
                  {this.state.popups} <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
          ))}
        </Map>
        <div className="aside">
          RADIUS HOSPITAL RESULTS OF THE USER GO HERE{" "}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MapView;
