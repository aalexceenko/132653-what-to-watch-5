import React from "react";
import GeneralPage from "../general-page/general-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import LoginScreen from "../login-screen/login-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";


const App = ({films}) => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <GeneralPage films={films} onFilmCardClick={(id) => history.push(`/films/${id}`)}/>
          )}
        />
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id"
          render={({history, match}) => (
            <FilmScreen films={films} match={match} onFilmCardClick={(id) => history.push(`/films/${id}`)}/>
          )}
        />
        <Route exact path="/films/:id/review"
          render={({match}) => (
            <AddReviewScreen films={films} match={match}/>
          )}
        />
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.array.isRequired,
    rating: PropTypes.string.isRequired,
    ratingText: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    myList: PropTypes.bool.isRequired,
  })).isRequired,
};

export default App;
