import React from "react";
import PropTypes from 'prop-types';
import {filmType} from "../../types/film";


const withMyListButton = (Component) => {
  class WithMyListButton extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        myList: this.props.film.myList,
      };

      this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {

      this.setState({
        myList: !this.props.film.myList,
      });
      this.props.changeMyListAction(this.props.film.id, Number(!this.state.myList));
    }

    render() {

      return (
        <Component
          {...this.props}
          handleClick={this._handleClick}
          myList={this.state.myList}
        />
      );
    }
  }
  WithMyListButton.propTypes = {
    changeMyListAction: PropTypes.func.isRequired,
    film: filmType,
  };

  return WithMyListButton;
};

export default withMyListButton;
