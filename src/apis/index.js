import axios from 'axios';

export const getCatBreedList = () =>
  axios.get('https://api.thecatapi.com/v1/breeds');
export const getBreedById = (id) =>
  axios.get(`https://api.thecatapi.com/v1/breeds/${id}`);
export const getImageById = (id) =>
  axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&include_breeds=false&limit=8`
  );
