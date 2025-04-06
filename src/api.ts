const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetData {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  origin_country: string[];
  original_language: string;
}

export function getPopular() {
  return fetch(`${BASE_URL}/popular`).then((r) => r.json());
}

export function getNowPlaying() {
  return fetch(`${BASE_URL}/now-playing`).then((r) => r.json());
}

export function getComingSoon() {
  return fetch(`${BASE_URL}/coming-soon`).then((r) => r.json());
}

export function getMovie(id: number) {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
}

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500/${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original/${image}`;
}
