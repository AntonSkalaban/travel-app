"use client";
import { FC, memo, useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl/maplibre";

import { IMarker, mapState, mapStyleUrl, markers } from "../model";
import styled from "./styled.module.scss";

import "maplibre-gl/dist/maplibre-gl.css";

export const ContactUsMap: FC = memo(() => {
  const [popupInfo, setPopupInfo] = useState<null | IMarker>(null);

  return (
    <section className={styled.map}>
      <Map initialViewState={mapState} mapStyle={mapStyleUrl}>
        <FullscreenControl />
        <GeolocateControl />
        <NavigationControl />

        {markers.map(({ longitude, latitude, name, color }) => (
          <Marker
            key={name}
            longitude={longitude}
            latitude={latitude}
            color={color}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo({ longitude, latitude, name, color });
            }}
          />
        ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            {popupInfo.name}
          </Popup>
        )}
      </Map>
    </section>
  );
});
