import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from "../../const";

const UserBlock = ({authorizationStatus}) => {

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ?
        <div className="user-block__avatar">
          <Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>      </div>
        : <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export default connect(mapStateToProps)(UserBlock);
