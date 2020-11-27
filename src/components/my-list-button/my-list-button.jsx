import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../types/film";
import {connect} from 'react-redux';
import {changeMyList} from '../../store/api-action';


const MyListButton = ({film, changeMyListAction}) => {
  const {myList, id} = film;

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={changeMyListAction(id, Number(!myList))}
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
  changeMyListAction: PropTypes.func.isRequired,
  film: filmType,
};

const mapDispatchToProps = (dispatch) => ({
  changeMyListAction(id, status) {
    dispatch(changeMyList(id, status));
  },
});


export default connect(null, mapDispatchToProps)(MyListButton);


