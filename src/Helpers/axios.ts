import axios from 'axios';
import { BaseUrl } from './consts';
axios.defaults.headers.common['Accept-Language'] = 'en-us';

axios.interceptors.response.use(
  (response) => {
    if (response) return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response) {
      if (
        (error.response.status === 403 || error.response.status === 401) &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true;
        try {
        } catch (_error) {
          Promise.reject(_error);
        }
      }
    }

    console.log('Axios error=>' + JSON.stringify(error.response));
    return Promise.reject(error.response);
  }
);

export const lunch = {
  /**
   *
   * @returns API endpoint that returns all Launch objects or a single launch.
   */
  getLunchs: async () => {
    return await axios.get(`${BaseUrl}/launch/`);
  },
  /**
   *
   * @param data
   */
  getRocketListBydate: async (data: { fromDate: Date; toDate: Date }) => {},
};
