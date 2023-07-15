import axios from "axios";
import { Notify } from 'notiflix';

axios.defaults.baseURL = "https://api.punkapi.com/v2";

export const fetchBeers = async () => {
  try {
    const response = await axios.get('/beers?page=1');
    const data = await JSON.parse(response.request.response);
    // console.log(data);
    return data;
  } catch (error) {
    Notify.warning(
      `We're sorry, but you've reached the end of search results.`
    );
  }
};

export const fetchBeerById = async  (id) => {
  try {
    const response = await axios.get(`/beers/${id}`);
    const data = response.data
  }catch (error) {
    Notify.warning(
      `We're sorry, but you've reached the end of search results.`
    );
  }
};

