import { axiosWithAuth } from './axiosWithAuth';

export const axiosCodes = {
  SUCCESS: 'Success',
  ERROR: 'Error',
  GET: 'GET',
  POST: 'POST',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

export const getFavorites = () => {};

export const getFavoriteById = id => {};

export const axiosAPICall = (
  path,
  type,
  data = null,
  callback,
  errorCallback
) => {
  switch (type) {
    case axiosCodes.GET: {
      axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_BASE_API}${path}`)
        .then(res => {
          if (callback != null) {
            callback({ status: axiosCodes.SUCCESS, data: res.data });
          }
        })
        .catch(err => {
          if (errorCallback != null) {
            errorCallback({ status: axiosCodes.ERROR, data: err });
          }
        });
      break;
    }
    case axiosCodes.POST: {
      axiosWithAuth()
        .post(`${process.env.REACT_APP_BACKEND_BASE_API}/${path}`, data)
        .then(res => {
          return { status: axiosCodes.SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: axiosCodes.ERROR, data: err };
        });
      break;
    }

    case axiosCodes.UPDATE: {
      axiosWithAuth()
        .update(`${process.env.REACT_APP_BACKEND_BASE_API}/${path}`, data)
        .then(res => {
          return { status: axiosCodes.SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: axiosCodes.ERROR, data: err };
        });
      break;
    }

    case axiosCodes.DELETE: {
      axiosWithAuth()
        .delete(`${process.env.REACT_APP_BACKEND_BASE_API}/${path}`, data)
        .then(res => {
          return { status: axiosCodes.SUCCESS, data: res.data };
        })
        .catch(err => {
          return { status: axiosCodes.ERROR, data: err };
        });
      break;
    }

    default: {
      return {
        status: axiosCodes.ERROR,
        data: 'Unknown error occured in AxiosWithAuth',
      };
    }
  }
};
