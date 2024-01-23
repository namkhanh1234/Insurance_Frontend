import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from '@react-google-maps/api';

const locations = [
    {
        lat: 10.76294,
        lng: 106.6823,
        text: 'KNH care cơ sở 1 227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam',
    },
    {
        lat: 10.8759,
        lng: 106.79915,
        text: 'KNH care cơ sở 2 Phường Linh Trung, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',
    },
];
const Map = () => {
    const [coords, setCoords] = useState({ lat: 10.7919048, lng: 106.68315 });
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        console.log('useEffect');
        navigator.geolocation.getCurrentPosition(({ coords: { longitude, latitude } }) => {
            console.log(latitude, ' ', longitude);
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    return (
        <div className="h-[100vh] w-full">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    center={coords}
                    zoom={12}
                >
                    {locations.map((location, index) => (
                        <MarkerF
                            key={index}
                            position={location}
                            icon={{
                                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                            }}
                            onClick={() => {
                                setSelectedLocation(location);
                                console.log(location);
                            }}
                        />
                    ))}

                    {selectedLocation && (
                        <InfoWindow
                            position={selectedLocation}
                            onCloseClick={() => {
                                console.log('close');
                                setSelectedLocation(null);
                            }}
                        >
                            <div className="max-w-[20vw] ">
                                <p>{selectedLocation.text}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
