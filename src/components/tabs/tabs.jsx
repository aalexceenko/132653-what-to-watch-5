import React from 'react';
import PropTypes from "prop-types";
import {filmType} from '../../types/film';
import {reviewType} from '../../types/review';
import {TabsType} from '../../const';
// import TabFilmOverview from '../tab-film-overview/tab-film-overview';
// import TabFilmDetails from '../tab-film-details/tab-film-details';
// import TabFilmReview from '../tab-film-review/tab-film-review';

import withTabs from "../../hocs/with-tabs/with-tabs";


const Tabs = ({activeTab, handleTabClick, renderContentForTab}) => {

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.keys(TabsType).map((tabName, index) => (
            <li className={`movie-nav__item ${activeTab === TabsType[tabName] ? `movie-nav__item--active` : ``}`} key={index}>
              <a className="movie-nav__link" onClick={() => handleTabClick(tabName)}>{TabsType[tabName]}</a>
            </li>
          ))
          }

        </ul>

      </nav>
      {renderContentForTab()}
    </React.Fragment>
  );

};

Tabs.propTypes = {
  film: filmType.isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  renderContentForTab: PropTypes.func.isRequired,
};

export default withTabs(Tabs);
