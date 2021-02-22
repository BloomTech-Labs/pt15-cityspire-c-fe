import { axiosWithAuth } from './axiosWithAuth';

export const SUCCESS = 'Success';
export const ERROR = 'Error';
export const GET = 'GET';
export const POST = 'POST';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const getFavorites = () => {};

export const getFavoriteById = id => {};

export const axiosAPICall = (path, type, data) => {
  switch (type) {
    case GET: {
      axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_BASE_URL}${path}`)
        .then(res => {
          return { status: SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: ERROR, data: err };
        });
      break;
    }

    case POST: {
      axiosWithAuth()
        .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/${path}`, data)
        .then(res => {
          return { status: SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: ERROR, data: err };
        });
      break;
    }

    case UPDATE: {
      axiosWithAuth()
        .update(`${process.env.REACT_APP_BACKEND_BASE_URL}/${path}`, data)
        .then(res => {
          return { status: SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: ERROR, data: err };
        });
      break;
    }

    case DELETE: {
      axiosWithAuth()
        .delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/${path}`, data)
        .then(res => {
          return { status: SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: ERROR, data: err };
        });
      break;
    }

    default: {
      return { status: ERROR, data: 'Unknown error occured in AxiosWithAuth' };
    }
  }
};
