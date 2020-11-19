import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, reviews} from "./mocks/films";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import rootReducer from "./store/reducers";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store);
ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
