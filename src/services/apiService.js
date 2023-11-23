import axios from 'axios';

axios.defaults.baseURL = 'https://65552f1e63cafc694fe7887c.mockapi.io';

export const getCarsByPage = async (page) => {
  const { data } = await axios.get('advert', {
    params: {
      page,
      limit: 12,
    },
  });
  return data;
};

export const getCarsByMake = async (page, make) => {
  const { data } = await axios.get('advert', {
    params: {
      page,
      limit: 12,
      make,
    },
  });
  return data;
};

export const getAllCars = async () => {
  const { data } = await axios.get('advert');
  return data;
};
