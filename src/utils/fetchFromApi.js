import axios from 'axios';

export const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/current.json';

const options = {
  headers: {
    'X-RapidAPI-Key': 'b4ec4c1f2bmshc32a8b68187c9b9p12d310jsn60207ba325fe',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}?q=${url}`, options);
  return data;
};
