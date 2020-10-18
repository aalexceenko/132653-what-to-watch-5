import React from "react";
import GeneralPage from "../general-page/general-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import LoginScreen from "../login-screen/login-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import {filmType} from '../../types/film';


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
  films: PropTypes.arrayOf(filmType).isRequired,
};

export default App;
