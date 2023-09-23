import React from 'react'
import env from "../../.env.local.js";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


export default function ShowMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: env.GOOGLE_MAPS_API_KEY,
      });

      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <React.Fragment>
        <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
    </React.Fragment>
  )
}
