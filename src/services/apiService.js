import axios from 'axios';

axios.defaults.baseURL = 'https://65552f1e63cafc694fe7887c.mockapi.io';

export const getCarsByPage = async (page = 1, limit = 12) => {
  const { data } = await axios.get(`advert?page=${page}&limit=${limit}`);
  return data;
};
