import React from "react";
import GeneralPage from "../general-page/general-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import LoginScreen from "../login-screen/login-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import Player from "../player/player";
import {filmType} from '../../types/film';
import {reviewType} from '../../types/review';
import withPlayer from "../../hocs/with-player/with-player";

const PlayerWrapped = withPlayer(Player);

const AppRoute = {
  DEFAULT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
};

const App = ({films, reviews}) => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.DEFAULT}
          render={({history}) => (
            <GeneralPage
              films={films}
              reviews={reviews}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              handleButtonPlayVideo={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id"
          render={({history, match}) => (
            <FilmScreen
              films={films}
              reviews={reviews}
              match={match}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              handleButtonPlayVideo={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path="/films/:id/review"
          render={({match}) => (
            <AddReviewScreen films={films} reviews={reviews} match={match}/>
          )}
        />
        <Route exact path="/player/:id"
          render={({match, history}) => (
            <PlayerWrapped films={films} match={match} handlePlayerExitClick={() => history.goBack()} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};

export default App;
