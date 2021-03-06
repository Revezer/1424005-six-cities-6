import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {getAuthorization} from '../../store/user/selectors';


const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return (
            render(routeProps)

          );
        }}
      />
      : <Redirect to={`/login`} />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorization(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
