import React from "react";
import TabFilmOverview from '../../components/tab-film-overview/tab-film-overview';
import TabFilmDetails from '../../components/tab-film-details/tab-film-details';
import TabFilmReview from "../../components/tab-film-review/tab-film-review";
import {TabsType} from '../../const';
import {filmType} from '../../types/film';


const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsType.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
      this._renderContentForTab = this._renderContentForTab.bind(this);
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
      const {description, id, rating, ratingText, director, votes, actors, year, runtime, genre} = film;


      switch (this.state.activeTab) {
        case TabsType.OVERVIEW:
          return (
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
            <TabFilmReview
              id={id}
            />
          );
        default:
          throw new Error(`Something went wrong. No matching tab!`);
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          handleTabClick={this._handleTabClick}
          renderContentForTab={this._renderContentForTab}

        />
      );
    }
  }

  WithTabs.propTypes = {
    film: filmType.isRequired,
  };

  return WithTabs;
};

export default withTabs;
