import React from "react";
import GeneralPage from "../general-page/general-page";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import LoginScreen from "../login-screen/login-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import Player from "../player/player";
import {filmType} from '../../types/film';
import withPlayer from "../../hocs/with-player/with-player";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";


const PlayerWrapped = withPlayer(Player);

const App = ({films, filmPromo}) => {

  return (

    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={({history}) => (
            <GeneralPage
              films={films}
              filmPromo={filmPromo}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              handleButtonPlayVideo={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST}
          render={({history}) => (
            <MyListScreen
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />
        <Route exact path="/films/:id"
          render={({history, match}) => (
            <FilmScreen
              films={films}
              match={match}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              handleButtonPlayVideo={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <PrivateRoute exact path="/films/:id/review"
          render={({match}) => (
            <AddReviewScreen films={films} match={match}/>
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
  filmPromo: filmType.isRequired,
};

const mapStateToProps = ({APP_PROCESS}) => ({
  films: APP_PROCESS.films,
  filmPromo: APP_PROCESS.filmPromo,
});

export {App};
export default connect(mapStateToProps)(App);

