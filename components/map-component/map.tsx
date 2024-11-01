import React, { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet"; 

const Map: React.FC = () => {
  const position: LatLngExpression = [6.703460, 3.346820]; // Your coordinates

  useEffect(() => {
    // Set default icon for markers
    const DefaultIcon = L.icon({
      iconUrl: "/marker-icon.png", // Ensure you have a marker icon in your public folder
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Apply the default icon to all markers
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="mt-4">
      <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            Your Office Location.
            <br />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
