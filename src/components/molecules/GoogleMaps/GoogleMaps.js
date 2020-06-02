import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import PropTypes from 'prop-types';

const GoogleMaps = ({ rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 49.6912999, lng: 19.1823983 }}>
      {rooms.map((room) => (
        <Marker
          key={room.id}
          position={{ lat: room.place.lat, lng: room.place.lng }}
          onClick={() => {
            setSelectedRoom(room);
          }}
          icon={{
            url: 'http://localhost:3000/static/media/football.b4bcb3ae.svg',
            scaledSize: { width: 32, height: 32 },
          }}
        />
      ))}
      {selectedRoom && (
        <InfoWindow
          position={{ lat: selectedRoom.place.lat, lng: selectedRoom.place.lng }}
          onCloseClick={() => {
            setSelectedRoom(null);
          }}
        >
          <> info o meczu </>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

GoogleMaps.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
    }),
  ),
};
GoogleMaps.defaultProps = {
  rooms: [],
};
export default GoogleMaps;
