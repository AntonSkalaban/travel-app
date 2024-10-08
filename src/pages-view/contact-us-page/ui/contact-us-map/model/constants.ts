export const mapState = {
  latitude: 53.9023,
  longitude: 27.5619,
  zoom: 13,
  terrainControl: true,
  scaleControl: true,
  fullscreenControl: "top-left",
  geolocateControl: false,
};

export const mapStyleUrl = process.env.NEXT_PUBLIC_MAP_STYLE_URL;

export const markers = [
  {
    latitude: 53.903,
    longitude: 27.562,
    name: "Hotel",
    color: "red",
  },
  {
    latitude: 53.905,
    longitude: 27.563,
    name: "Pharmacy",
    color: "green",
  },
  {
    latitude: 53.902,
    longitude: 27.56,
    name: "Shop",
    color: "blue",
  },
];
