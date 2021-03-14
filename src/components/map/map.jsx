import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';
import {getSelectedOffer} from '../../store/data/selectors';

const city = {
  "latitude": 52.370216,
  "longitude": 4.895168,
  "zoom": `12`
};

const Map = (props) => {
  const {points, coordinatesOffer} = props;
  const mapRef = useRef();

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: {
        lat: city.latitude,
        lon: city.longitude
      },
      zoom: city.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `${coordinatesOffer === point.id ? `./img/pin-active.svg` : `./img/pin.svg`}`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lon: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(map);
    });
    return () => {
      map.remove();
    };
  }, [city, points, coordinatesOffer]);

  return (
    <div ref={mapRef} style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  city: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  points: PropTypes.array.isRequired,
  coordinatesOffer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  coordinatesOffer: getSelectedOffer(state),
});

export {Map};
export default connect(mapStateToProps, null)(Map);
