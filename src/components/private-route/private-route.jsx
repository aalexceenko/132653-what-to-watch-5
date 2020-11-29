import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from "../../const";


const PrivateRoute = (props) => {
  const {render, authorizationStatus} = props;

  return (
    <Route {...props} render={(routeProps) => (
      authorizationStatus === AuthorizationStatus.AUTH
        ? render(routeProps)
        : <Redirect to='/login' />
    )}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export default connect(mapStateToProps)(PrivateRoute);
