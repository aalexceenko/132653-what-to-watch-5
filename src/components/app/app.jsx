import React from "react";
import GeneralPage from "../general-page/general-page";
import PropTypes from "prop-types";


const App = ({title, genre, releaseDate}) => {

  return (
    <GeneralPage title={title} genre={genre} releaseDate={releaseDate} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
