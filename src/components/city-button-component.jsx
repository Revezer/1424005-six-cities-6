import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {citySelection} from '../store/action';
import {getCity} from '../store/increment-city/selectors';

const CityButton = (props) => {
  const {city, selectionCity, nameCity} = props;
  const classActive = () => nameCity === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`;
  return (
    <li className="locations__item">
      <a className={classActive()}
        onClick={() => {
          selectionCity(nameCity);
        }}>
        <span>{nameCity}</span>
      </a>
    </li>
  );
};

CityButton.propTypes = {
  city: PropTypes.string.isRequired,
  selectionCity: PropTypes.func.isRequired,
  nameCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  selectionCity(selectedСity) {
    dispatch(citySelection(selectedСity));
  },
});

export {CityButton};
export default connect(mapStateToProps, mapDispatchToProps)(CityButton);
