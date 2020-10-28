import React from 'react';
// import PropTypes from "prop-types";
import {filmType} from '../../types/film';

import {TabsType} from '../../const';
import TabFilmOverview from '../tab-film-overview/tab-film-overview';
import TabFilmDetails from '../tab-film-details/tab-film-details';


// import PropTypes from 'prop-types';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabsType.OVERVIEW,
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(tabName) {
    this.setState(
        {
          activeTab: TabsType[tabName],
        }
    );
  }

  _renderContentForTab() {

    const {film} = this.props;
    const {description, rating, ratingText, director, votes, actors, year, runtime, genre} = film;

    console.log(this.state.activeTab);

    switch (this.state.activeTab) {
      case TabsType.OVERVIEW:
        return (
          // console.log(`OVERVIEW`);
          <TabFilmOverview
            description={description}
            rating={rating}
            ratingText={ratingText}
            director={director}
            votes={votes}
            actors={actors}
          />
        );

      case TabsType.DETAILS:
        return (
          // console.log(`DETAILS`)
          <TabFilmDetails
            runtime={runtime}
            year={year}
            genre={genre}
            director={director}
            actors={actors}
          />
        );

      case TabsType.REVIEWS:
        return (
          console.log(`REVIEWS`)
        );
      default:
        throw new Error(`Something went wrong. No matching tab!`);
    }
  }

  render() {

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.keys(TabsType).map((tabName, index) => (
              <li className={`movie-nav__item ${this.state.activeTab === TabsType[tabName] ? `movie-nav__item--active` : ``}`} key={index}>
                <a className="movie-nav__link" onClick={() => this._handleTabClick(tabName)}>{TabsType[tabName]}</a>
              </li>
            ))
            }

          </ul>

        </nav>
        {this._renderContentForTab()}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  film: filmType.isRequired,
};

export default Tabs;
