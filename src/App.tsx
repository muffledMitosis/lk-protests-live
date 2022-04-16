import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import { LatLngExpression } from "leaflet";

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
    iconUrl: require("leaflet/dist/images/marker-icon.png").default,
    shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
  });
// Some bug in leaflet that causes it to not load images. The react-leaflet
// library is very poorly maintained

function App() {
  const position: LatLngExpression = [48.864716, 2.349];


  console.log("Lol");

  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
