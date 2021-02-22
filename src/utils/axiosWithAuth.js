import axios from 'axios';

export const axiosWithAuth = () => {
  const token = 'Bearer ' + localStorage.getItem('token');

  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_API,
    headers: {
      Authorization: token,
    },
  });
};
