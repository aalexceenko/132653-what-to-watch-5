import React from 'react';
import PropTypes from "prop-types";
import {filmType} from '../../types/film';
import {TabsType} from '../../const';
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
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  renderContentForTab: PropTypes.func.isRequired,
};

export default withTabs(Tabs);
