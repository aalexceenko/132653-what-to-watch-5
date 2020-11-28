import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {changeMyList} from '../../store/api-action';
import withMyListButton from "../../hocs/with-my-list-button/with-my-list-button";


const MyListButton = ({myList, handleClick}) => {

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={handleClick}
    >

      { myList
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      }

      <span>My list</span>

    </button>
  );
};

MyListButton.propTypes = {
  myList: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_PROCESS}) => {
  return ({
    myList: APP_PROCESS.myList,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeMyListAction(id, status) {
    dispatch(changeMyList(id, status));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withMyListButton(MyListButton));

