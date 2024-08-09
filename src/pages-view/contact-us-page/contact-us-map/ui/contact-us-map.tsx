"use client";
import { FC, memo } from "react";
import Map, { Marker } from "react-map-gl/maplibre";

import { mapState, mapStyleUrl, markerCoords } from "../model/constants";
import styled from "./styled.module.scss";

import "maplibre-gl/dist/maplibre-gl.css";

const ContactUsMap: FC = memo(() => {
  return (
    <section className={styled.map}>
      <Map initialViewState={mapState} mapStyle={mapStyleUrl}>
        <Marker
          longitude={markerCoords.longitude}
          latitude={markerCoords.latitude}
          color="red"
        />
      </Map>
    </section>
  );
});

export default ContactUsMap;
