import React, { createRef, Component } from "react";
import "../../App.css";
import "../../index.css";
import "./MapView.css";
import "./MapViewStyle.css";
import API from "../../utils/API";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Switch, Route, Link } from "react-router-dom";
import LocateControl from "react-leaflet-locate-control";

const locateOptions = {
  position: "topright",
  strings: {
    title: "Show me where I am, yo!"
  }
};

class MapLocater extends Component {
  constructor() {
    super();
    this.state = {
      markers: [[39.8333333, -98.585522]],
      popups: "Cool hospital info",
      center: [39.8333333, -98.585522],
      lnglat: [],
      results: [],
      locateOptions: {
        position: "topright",
        strings: {
          title: "Show me where I am, yo!"
        }

        // getlonglat:getLatLng()
      }
    };
  }

  mapRef = createRef();
  // componentDidMount() {
  //   // this.locateNear();
  //   const mapApi = this.leafletElement;
  //   this.setState({ lnglat: mapApi.getLatLng().reverse() });
  // }
  handleClick = () => {
    this.setState({
      lnglat: this.mapRef.current.leafletElement.getLatLng().reverse()
    });
    console.log("Attempting to get user location");
  };
  locateNear = () => {
    // getLatLng();
    // this.setState({
    //   markers: [[39.8333333, -98.485522], [39.8333333, -98.585522]]
    // });
  };

  render() {
    console.log("Your current position is: ", this.state.lnglat);
    return (
      <Map ref={this.mapRef} id="map" zoom={3}>
        <LocateControl options={this.state.locateOptions} />
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.markers.map((position, idx) => (
          <Marker key={`marker-${idx}`} position={position}>
            <Popup>
              <span>
                {this.state.popups} <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        ))}
        <Link to={"/map"} />
      </Map>
    );
  }
}

class MapView extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <MapLocater />
        <div className="aside">
          <button className="test" onClick={this.handleClick}>
            Surgery
          </button>
          RADIUS HOSPITAL RESULTS OF THE USER GO HERE{" "}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MapView;
