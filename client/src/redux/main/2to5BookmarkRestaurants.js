//내부 import
import { SERVER_URL } from '../../pages/main/config';
import { fetchRestaurantsFailure, fetch2to5BookmarkRestaurantsSuccess } from '../actions';
//외부 import
import axios from 'axios';

export const fetch2to5BookmarkRestaurants = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${SERVER_URL}/restaurants`);
      const responseData = response.data;
      const sortedData = responseData.sort((a, b) => b.bookmark - a.bookmark);

      const is2to5BookmarkRestaurants = sortedData.slice(1, 5);
      dispatch(fetch2to5BookmarkRestaurantsSuccess(is2to5BookmarkRestaurants));
    } catch (error) {
      dispatch(fetchRestaurantsFailure(error.message));
    }
  };
};
