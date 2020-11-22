import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {fetchFilms, checkAuth} from "./store/api-action";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));


Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
          />
        </Provider>,

        document.querySelector(`#root`)
    );
  });
