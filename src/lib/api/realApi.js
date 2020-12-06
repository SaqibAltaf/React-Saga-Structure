import axios from 'axios';
import { timeParse } from 'd3-time-format';
import config from 'lib/config';



const getAccessToken = () => {
  const token = localStorage.getItem('access_token') || '';
  return token;
};

export const tokenReissue = () => {
  const baseUrl = `${config.BASE_URL}user/v1/auth/access_token/reissue`;
  return axios({
    method: 'POST',
    url: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      'x-refresh-token': localStorage.getItem('refresh_token'),
    },
  })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

let isRefreshing = false;
const refreshSubscribers = [];

const subscribeTokenRefresh = cb => {
  refreshSubscribers.push(cb);
};

const onRrefreshed = token => {
  refreshSubscribers.map(cb => cb(token));
};

axios.interceptors.response.use(
  response => response,
  error => {
    const { config: _config, response } = error;
    const originalRequest = _config;
    const networkError = { response: { data: { status: 500, code: 'unknown' } } };
    if (response === undefined) return Promise.reject(networkError);
    if (
      response.status === 401 &&
      (response.data.code === 30002 || response.data.code === 30003)
    ) {
      if (!isRefreshing) {
        isRefreshing = true;
        tokenReissue().then(
          res => {
            isRefreshing = false;
            localStorage.setItem('access_token', res.data.access_token);
            onRrefreshed(res.data.access_token);
          },
          () => {
            localStorage.clear();
            window.location.href = '/signin';
          },
        );
      }

      const retryOrigReq = new Promise(resolve => {
        subscribeTokenRefresh(token => {
          originalRequest.headers['x-access-token'] = token;
          resolve(axios(originalRequest));
        });
      });
      return retryOrigReq;
    }

    if (response.status === 401) {
      localStorage.clear();
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  },
);

export const signin = data => {
  const { body } = data;
  const baseUrl = `${config.BASE_URL}user/v1/auth/signin`;
  return axios({
    method: 'POST',
    url: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

