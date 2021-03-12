import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {sortOffers} from '../store/action';
import {getSortType} from '../store/data/selectors';

const SortOffers = (props) => {
  const {selectSort, sortType} = props;
  const classActive = (sort) => sortType === sort ? `places__option places__option--active` : `places__option`;
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className={classActive(`Popular`)} tabIndex={0}
        onClick={() => {
          selectSort(`Popular`);
        }}>Popular</li>
      <li className={classActive(`lowToHigh`)} tabIndex={0}
        onClick={() => {
          selectSort(`lowToHigh`);
        }}>Price: low to high</li>
      <li className={classActive(`highToLow`)} tabIndex={0}
        onClick={() => {
          selectSort(`highToLow`);
        }}>Price: high to low</li>
      <li className={classActive(`topRated`)} tabIndex={0}
        onClick={() => {
          selectSort(`topRated`);
        }}>Top rated first</li>
    </ul>
  );
};

SortOffers.propTypes = {
  selectSort: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  selectSort(selectedSort) {
    dispatch(sortOffers(selectedSort));
  }
});

export {SortOffers};
export default connect(mapStateToProps, mapDispatchToProps)(SortOffers);
