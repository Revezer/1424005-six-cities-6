import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import "leaflet/dist/leaflet.css";
import {getOffers} from '../../store/data/selectors';
import {getCity} from '../../store/increment-city/selectors';

const city = {
  "latitude": 52.370216,
  "longitude": 4.895168,
  "zoom": 10
};

const Map = (props) => {
  const {points} = props;
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
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.latitude,
        lon: point.longitude
      },
      {
        icon: customIcon
      })
      .addTo(map);
    });
    return () => {
      map.remove();
    };
  }, [city, points]);

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
  points: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }))
};

const mapStateToProps = (state) => ({
  points: getOffers(state).filter((offer) => (
    offer.city.name === getCity(state)
  )).map((offer) => offer.location),
});

export {Map};
export default connect(mapStateToProps, null)(Map);
