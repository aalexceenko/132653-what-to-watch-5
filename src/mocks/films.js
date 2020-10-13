import {generateId, getRandomFloat, getRandomArrayItem, getRandomInteger, getRandomArrayItems, generateDate} from "../utils";

const PREVIEW_VIDEO = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const FILM_COUNT = 8;
const REVIEW_COUNT = 5;

const TITLES = [
  `21`,
  `The Professor`,
  `Matilda`,
  `Destraction`,
  `The Social Network`,
];

const GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

const POSTER = [
  `img/aviator.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/johnny-english.jpg`,
  `img/macbeth.jpg`,
  `img/midnight-special.jpg`,
  `img/mindhunter.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/orlando.jpg`,
  `img/player-poster.jpg`,
  `img/pulp-fiction.jpg`,
  `img/revenant.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/shutter-island.jpg`,
  `img/snatch.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
];

const NAMES = [
  `Anna Adams`,
  `Betty Brown`,
  `Chris Costner`,
  `David Doe`,
  `Edith Edisson`,
  `Frank Farmer`,
  `George Gatsby`
];

const DESCRIPTION_STRINGS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const RATING_TEXT = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very good`,
  `Awesome`,
];

const generateFilm = () => {
  return {
    id: generateId(),
    title: getRandomArrayItem(TITLES),
    genre: getRandomArrayItem(GENRES),
    previewImage: getRandomArrayItem(POSTER),
    previewVideo: PREVIEW_VIDEO,
    year: getRandomInteger(1900, 2000),
    description: getRandomArrayItems(DESCRIPTION_STRINGS),
    rating: getRandomFloat(0, 10),
    ratingText: getRandomArrayItem(RATING_TEXT),
    votes: getRandomInteger(0, 500),
    director: getRandomArrayItem(NAMES),
    actors: getRandomArrayItems(NAMES),
    runtime: getRandomInteger(5, 180),
    myList: Boolean(getRandomInteger(0, 1)),
  };
};

const generateReview = () => {
  return {
    author: getRandomArrayItem(NAMES),
    rating: getRandomInteger(0, 5),
    message: getRandomArrayItem(DESCRIPTION_STRINGS),
    date: generateDate(new Date(2000, 0, 1), new Date()),
  };
};

export let films = [];
export let reviews = [];

for (let i = 0; i < FILM_COUNT; i++) {
  films.push(generateFilm());
}

for (let i = 0; i < REVIEW_COUNT; i++) {
  reviews.push(generateReview());
}
