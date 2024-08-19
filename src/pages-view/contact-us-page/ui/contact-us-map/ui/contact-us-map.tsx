"use client";
import { FC, memo, useMemo } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl/maplibre";

import maplibregl from "maplibre-gl";

import {
  hotelMarker,
  mapState,
  mapStyleUrl,
  pharmacyMarker,
  shopMarker,
} from "../model";
import styled from "./styled.module.scss";

import "maplibre-gl/dist/maplibre-gl.css";

export const ContactUsMap: FC = memo(() => {
  const hotelPopup = useMemo(() => {
    return new maplibregl.Popup().setText("Hotel!");
  }, []);

  const pharmacyPopup = useMemo(() => {
    return new maplibregl.Popup().setText("Pharmacy!");
  }, []);

  const shopPopup = useMemo(() => {
    return new maplibregl.Popup().setText("Shop!");
  }, []);

  return (
    <section className={styled.map}>
      <Map initialViewState={mapState} mapStyle={mapStyleUrl}>
        <FullscreenControl />
        <GeolocateControl />
        <NavigationControl />

        <Marker
          longitude={hotelMarker.longitude}
          latitude={hotelMarker.latitude}
          color="red"
          popup={hotelPopup}
        />

        <Marker
          longitude={pharmacyMarker.longitude}
          latitude={pharmacyMarker.latitude}
          color="green"
          popup={pharmacyPopup}
        />

        <Marker
          longitude={shopMarker.longitude}
          latitude={shopMarker.latitude}
          color="blue"
          popup={shopPopup}
        />
      </Map>
    </section>
  );
});
