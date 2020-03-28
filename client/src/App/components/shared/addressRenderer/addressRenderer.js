import React, {Fragment } from 'react';
import {Box,} from '@material-ui/core';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    leaflet: {
      width: "80%",
      margin:"auto",
      height: "100%",
      textAlign:"center",
      border: "1px solid black"
    },
}));

function AddressRenderer({location}){
    const cssStyles = styles();
    const {latitude,longitude} = location.coordinates;
    return(
        <Box height="350px">
        <Map
          center={[latitude, longitude]}
          zoom={17}
          minZoom="13"
          maxZoom="18"
          className={cssStyles.leaflet}
        >
          <Marker position={[latitude, longitude]}>
            <Popup>
              {location.street.number}{" "}
              {location.street.name + ", "}
              {location.city + ", "}
              {location.country}
            </Popup>
          </Marker>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </Box>
    )
}

export default AddressRenderer;