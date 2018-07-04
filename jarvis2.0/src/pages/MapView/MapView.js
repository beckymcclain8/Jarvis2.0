import React, { Component } from "react";
// import { Map, LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "../../App.css";
import "../../index.css";
import "./MapView.css";
import "./MapViewStyle.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import { Map, Marker } from "react-leaflet";

class WrappedMarker extends Component {
  render() {
    const { map, layerContainer } = this.props; //Given by the `Map` component
    return (
      <Marker
        map={map} /* pass down to Marker */
        layerContainer={layerContainer} /* pass down to Marker */
        position={[51.505, -0.09]}
      />
    );
  }
}

export default class MapView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Map id="map" center={[51.505, -0.09]} zoom={13}>
          <WrappedMarker />
        </Map>
      </div>
    );
  }
}
