import { useEffect, useRef } from "react";

import Feature from "ol/Feature";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";

const MapWrapper = () => {
  const Pilsen_coords = [13.373637, 49.73843];

  // get ref to div element - OpenLayers will render into this div
  const mapElement = useRef();

  // initialize map on mounting
  useEffect(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(Pilsen_coords)),
      name: "Somewhere near Pilsen",
    });

    const iconLayer = new VectorLayer({
      source: new VectorSource({
        features: [iconFeature],
      }),
      style: new Style({
        image: new Icon({
          src: "/images/maps-icons.png",
        }),
      }),
    });

    // create and add vector source layer
    const initialFeaturesLayer = new TileLayer({
      source: new OSM(),
    });

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [initialFeaturesLayer, iconLayer],
      view: new View({
        center: fromLonLat(Pilsen_coords),
        zoom: 5,
      }),
      controls: [],
    });
  }, []);

  return <div ref={mapElement} className="w-fít h-96"></div>;
};

export default MapWrapper;
