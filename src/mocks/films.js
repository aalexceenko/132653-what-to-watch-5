import {generateId, getRandomFloat, getRandomArrayItem, getRandomInteger, getRandomArrayItems, generateDate} from "../utils";

const PREVIEW_VIDEO = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const FILM_COUNT = 8;
const REVIEW_COUNT = 5;
const VOTES_MAX = 500;
const RATING_FILM_MAX = 10;
const RATING_REVIEW_MAX = 5;

const RuntimeMinutes = {
  MIN: 5,
  MAX: 180
};

const ReleaseYear = {
  MIN: 1900,
  MAX: 2020,
};

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

const POSTERS = [
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

const generateFilm = () => ({
  id: generateId(),
  title: getRandomArrayItem(TITLES),
  genre: getRandomArrayItem(GENRES),
  previewImage: getRandomArrayItem(POSTERS),
  previewVideo: PREVIEW_VIDEO,
  year: getRandomInteger(ReleaseYear.MIN, ReleaseYear.MAX),
  description: getRandomArrayItems(DESCRIPTION_STRINGS),
  rating: getRandomFloat(0, RATING_FILM_MAX),
  ratingText: getRandomArrayItem(RATING_TEXT),
  votes: getRandomInteger(0, VOTES_MAX),
  director: getRandomArrayItem(NAMES),
  actors: getRandomArrayItems(NAMES),
  runtime: getRandomInteger(RuntimeMinutes.MIN, RuntimeMinutes.MAX),
  myList: Boolean(getRandomInteger()),
});

const generateReview = () => ({
  author: getRandomArrayItem(NAMES),
  rating: getRandomInteger(0, RATING_REVIEW_MAX),
  message: getRandomArrayItem(DESCRIPTION_STRINGS),
  date: generateDate(new Date(2000, 0, 1), new Date()),
});

export let films = [];
export let reviews = [];

for (let i = 0; i < FILM_COUNT; i++) {
  films.push(generateFilm());
}

for (let i = 0; i < REVIEW_COUNT; i++) {
  reviews.push(generateReview());
}
