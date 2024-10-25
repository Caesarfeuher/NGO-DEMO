// "use client"; // Ensure this line is added for a client component

// import React, { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { LatLngExpression } from 'leaflet'; 
// import PlaceIcon from '@mui/icons-material/Place';

// const Contact: React.FC = () => {
//   const [mapReady, setMapReady] = useState(false); // State to check if map is ready

//   useEffect(() => {
//     setMapReady(true); // Set map ready to true when component mounts
//   }, []);

//   const position: LatLngExpression = [7.3796, 3.9675]; // Example coordinates

//   // Set default icon for markers
//   const DefaultIcon = L.icon({
//     iconUrl: "/marker-icon.png", // Ensure you have a marker icon in your public folder
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41],
//   });

//   // Apply the default icon to all markers
//   useEffect(() => {
//     L.Marker.prototype.options.icon = DefaultIcon;
//   }, []);

//   return (
//     <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/contactimg.png")' }}>
//       <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//         <div className="flex flex-col md:flex-row items-start mx-4 md:mx-16 py-8 md:py-16 w-full">
//           {/* Left side with contact information */}
//           <div className="text-white md:w-1/2 p-4 md:p-8 md:mr-8">
//             <h2 className="text-3xl -mt-10 md:text-4xl font-bold mb-0" style={{ fontFamily: "Aeonik", fontWeight: 500, fontSize: "44px", lineHeight: "52.8px", letterSpacing: "-2%", color: "#F0F2F5", }}>
//               Contact Us
//             </h2>
//             <p className="text-base md:text-lg mb-6" style={{ fontFamily: "Figtree", fontWeight: 400, fontSize: "16px", lineHeight: "27.2px", color: "#F9FAFB", }}>
//               Have questions about our services? We&apos;re here to help! Contact our team today.
//             </p>

//             {/* Map container */}
//             {mapReady && (
//               <div className="mt-4">
//                 <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
//                   <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//                   />
//                   <Marker position={position}>
//                     <Popup>
//                       Your Office Location.
//                       <br />
//                       <a
//                         href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Get Directions
//                       </a>
//                     </Popup>
//                   </Marker>
//                 </MapContainer>
//               </div>
//             )}
//           </div>

//           {/* Right side with form */}
//           <div className="bg-green-100 rounded-lg shadow-lg p-4 px-8 md:p-8 mt-8 md:mt-0 w-full md:w-1/2 max-w-md md:max-w-none" style={{ background: "#C2CDA9" }}>
//             <form className="flex flex-col justify-between h-full">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label htmlFor="firstName" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     className="w-full p-2 mt-1 border border-gray-300 rounded"
//                     style={{ backgroundColor: "#E7EBDD" }}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     className="w-full p-2 mt-1 border border-gray-300 rounded"
//                     style={{ backgroundColor: "#E7EBDD" }}
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full p-2 mt-1 border border-gray-300 rounded"
//                   style={{ backgroundColor: "#E7EBDD" }}
//                 />
//               </div>
//               <div className="mb-6 flex-grow">
//                 <label htmlFor="message" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
//                   How can we help?
//                 </label>
//                 <textarea
//                   id="message"
//                   className="w-full p-2 mt-1 border border-gray-300 rounded h-full"
//                   style={{ backgroundColor: "#E7EBDD" }}
//                 ></textarea>
//               </div>
//               <div className="text-center mt-4">
//                 <button
//                   type="submit"
//                   className="py-2 px-4 rounded w-full hover:bg-green-700"
//                   style={{ backgroundColor: "#01451E", fontFamily: "Figtree", fontWeight: 600, fontSize: "16px", lineHeight: "27.2px", color: "#FFFFFF" }}
//                 >
//                   Send message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




"use client"; // Ensure this line is added for a client component

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet'; 
import PlaceIcon from '@mui/icons-material/Place';

const Contact: React.FC = () => {
  const [mapReady, setMapReady] = useState(false); // State to check if map is ready

  // Move the position and DefaultIcon inside the useEffect
  const position: LatLngExpression = [7.3796, 3.9675]; // Example coordinates

  useEffect(() => {
    setMapReady(true); // Set map ready to true when component mounts

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
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/contactimg.png")' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="flex flex-col md:flex-row items-start mx-4 md:mx-16 py-8 md:py-16 w-full">
          {/* Left side with contact information */}
          <div className="text-white md:w-1/2 p-4 md:p-8 md:mr-8">
            <h2 className="text-3xl -mt-10 md:text-4xl font-bold mb-0" style={{ fontFamily: "Aeonik", fontWeight: 500, fontSize: "44px", lineHeight: "52.8px", letterSpacing: "-2%", color: "#F0F2F5", }}>
              Contact Us
            </h2>
            <p className="text-base md:text-lg mb-6" style={{ fontFamily: "Figtree", fontWeight: 400, fontSize: "16px", lineHeight: "27.2px", color: "#F9FAFB", }}>
              Have questions about our services? We&apos;re here to help! Contact our team today.
            </p>

            {/* Map container */}
            {mapReady && (
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
            )}
          </div>

          {/* Right side with form */}
          <div className="bg-green-100 rounded-lg shadow-lg p-4 px-8 md:p-8 mt-8 md:mt-0 w-full md:w-1/2 max-w-md md:max-w-none" style={{ background: "#C2CDA9" }}>
            <form className="flex flex-col justify-between h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-2 mt-1 border border-gray-300 rounded"
                    style={{ backgroundColor: "#E7EBDD" }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-2 mt-1 border border-gray-300 rounded"
                    style={{ backgroundColor: "#E7EBDD" }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  style={{ backgroundColor: "#E7EBDD" }}
                />
              </div>
              <div className="mb-6 flex-grow">
                <label htmlFor="message" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                  How can we help?
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 mt-1 border border-gray-300 rounded h-full"
                  style={{ backgroundColor: "#E7EBDD" }}
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="py-2 px-4 rounded w-full hover:bg-green-700"
                  style={{ backgroundColor: "#01451E", fontFamily: "Figtree", fontWeight: 600, fontSize: "16px", lineHeight: "27.2px", color: "#FFFFFF" }}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
