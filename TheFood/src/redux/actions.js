import * as api from '../api/index.js';

export const GET_FOOD_DATA = 'GET_FOOD_DATA';

export const getFoodData = () => async (dispatch) => {
  try {
    const foodList = await api.getFoodList();

    dispatch({
      type: GET_FOOD_DATA,
      payload: foodList,
    });
  } catch (error) {}
};
 