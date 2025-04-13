import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import L from "leaflet";

const center = {
    lat: 30.3753,
    lng: 69.3451,
};

const locations = [
    {
        name: "Islamabad",
        position: { lat: 33.6844, lng: 73.0479 },
        color: "orange",
        submarks: [
            { name: "Scriptura Islamabad - G-5", position: { lat: 33.7076, lng: 73.0541 } },
            { name: "Scriptura Islamabad - Ataturk Avenue", position: { lat: 33.7185, lng: 73.0637 } },
            { name: "Scriptura Islamabad - Shalimar 5", position: { lat: 33.6765, lng: 73.0600 } },
            { name: "Scriptura Islamabad - Shakarparian", position: { lat: 33.6931, lng: 73.0810 } },
        ],
    },
    {
        name: "Lahore",
        position: { lat: 31.5204, lng: 74.3587 },
        color: "yellow",
        branches: [
            { name: "Scriptura Lahore - DHA Phase 5", position: { lat: 31.4890, lng: 74.3700 } },
            { name: "Scriptura Lahore - Paragon City", position: { lat: 31.5720, lng: 74.4100 } },
            { name: "Scriptura Lahore - Bahria Town", position: { lat: 31.4200, lng: 74.2900 } },
        ],
    },
    {
        name: "Karachi",
        position: { lat: 24.8607, lng: 67.0011 },
        color: "green",
        submarks: [
            { name: "Scriptura Karachi - Club Road", position: { lat: 24.8615, lng: 67.0221 } },
            { name: "Scriptura Karachi - Abdullah Haroon Rd", position: { lat: 24.8642, lng: 66.9900 } },
        ],
    },
];

function FlyToLocation({ position }) {
    const map = useMap();
    useEffect(() => {
        if (position) map.flyTo(position, 13, { duration: 1 });
    }, [position]);
    return null;
}

export default function Location() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [flyTo, setFlyTo] = useState(null);

    useEffect(() => {
        // Page fade in
        gsap.fromTo(
            '.location',
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
    }, []);

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
    };

    const handleClose = () => {
        setSelectedLocation(null);
    };

    const mainMarkerIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const subMarkerIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [20, 30],
        iconAnchor: [10, 30],
        popupAnchor: [1, -28],
    });

    useEffect(() => {
        if (selectedLocation) {
            gsap.fromTo(
                ".location-div",
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
            );
        }
    }, [selectedLocation]);

    return (
        <div className="location relative h-screen w-full bg-[#fab9b9]"
            style={{
                backgroundImage: 'url(./assets/location.jpg)',  // Add background image here
                backgroundSize: 'cover',  // Ensure the image covers the full area
                backgroundPosition: 'center',  // Center the image
            }}>
            <div className="bg-black/70 absolute inset-0 z-0" />
            {/* Sidebar */}
            <div className="absolute top-40 left-30 w-80 bg-[#f8f9f8] text-black rounded-xl shadow-md border border-gray-200 z-[20]">
                <div className="p-6 space-y-6 text-sm font-medium">
                    <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Locations</h2>
                    <div className="space-y-4">
                        {/* Lahore */}
                        <div>
                            <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                                Lahore
                            </div>
                            <ul className="ml-6 mt-1 text-gray-800 space-y-1">
                                {locations[1].branches.map((branch, idx) => (
                                    <li
                                        key={idx}
                                        className="cursor-pointer hover:text-yellow-700 transition"
                                        onClick={() => setFlyTo(branch.position)}
                                    >
                                        {branch.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Islamabad */}
                        <div>
                            <div className="flex items-center gap-2 text-orange-600 font-semibold">
                                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                                Islamabad
                            </div>
                            <ul className="ml-6 mt-1 text-gray-800 space-y-1">
                                {locations[0].submarks.map((mark, idx) => (
                                    <li
                                        key={idx}
                                        className="cursor-pointer hover:text-orange-700 transition"
                                        onClick={() => setFlyTo(mark.position)}
                                    >
                                        {mark.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Karachi */}
                        <div>
                            <div className="flex items-center gap-2 text-green-600 font-semibold">
                                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                                Karachi
                            </div>
                            <ul className="ml-6 mt-1 text-gray-800 space-y-1">
                                {locations[2].submarks.map((mark, idx) => (
                                    <li
                                        key={idx}
                                        className="cursor-pointer hover:text-green-700 transition"
                                        onClick={() => setFlyTo(mark.position)}
                                    >
                                        {mark.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map with Padding and Rounded Corners */}
            <div className="p-20 pt-30 h-full opacity-90">
                <MapContainer
                    center={center}
                    zoom={6}
                    scrollWheelZoom={true}
                    zoomControl={false}
                    className="w-full h-full rounded-2xl overflow-hidden z-10"
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                    />

                    {flyTo && <FlyToLocation position={flyTo} />}

                    {locations.map((loc, idx) => (
                        <Marker
                            key={idx}
                            position={loc.position}
                            icon={mainMarkerIcon}
                            eventHandlers={{ click: () => handleMarkerClick(loc) }}
                        >
                            <Popup>{loc.name}</Popup>
                        </Marker>
                    ))}

                    {locations.map((loc) =>
                        (loc.branches || loc.submarks || []).map((sub, idx) => (
                            <Marker
                                key={`${loc.name}-sub-${idx}`}
                                position={sub.position}
                                icon={subMarkerIcon}
                            >
                                <Popup>{sub.name}</Popup>
                            </Marker>
                        ))
                    )}
                </MapContainer>

            </div>

            {/* Info Panel */}
            {selectedLocation && (
                <div className="absolute location-div top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-xl z-50 w-96">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">{selectedLocation.name}</h3>
                        <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {selectedLocation.branches && (
                        <div>
                            <h4 className="mt-4 text-lg font-semibold">Scriptura Hotel Branches in Lahore:</h4>
                            <ul className="mt-2 list-disc ml-6 text-gray-600">
                                {selectedLocation.branches.map((branch, idx) => (
                                    <li key={idx}>{branch.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {selectedLocation.submarks && (
                        <div>
                            <h4 className="mt-4 text-lg font-semibold">Locations in {selectedLocation.name}:</h4>
                            <ul className="mt-2 list-disc ml-6 text-gray-600">
                                {selectedLocation.submarks.map((mark, idx) => (
                                    <li key={idx}>{mark.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
