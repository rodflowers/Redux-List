import * as actionType from "../constants/list.constants";

export const addToList = (item) => (dispatch) => {
  try {
    dispatch({
      type: actionType.ADD_ITEM_REQUEST,
      payload: {
        name: item,
        key: Math.random(),
      },
    });

    dispatch({ type: actionType.ADD_ITEM_SUCCESS });
  } catch (err) {
    dispatch({
      type: actionType.ADD_ITEM_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const deleteItemList = (key) => (dispatch) => {
  try {
    dispatch({
      type: actionType.DELETE_ITEM_REQUEST,
      payload: key,
    });

    dispatch({ type: actionType.DELETE_ITEM_SUCCESS });
  } catch (err) {
    dispatch({
      type: actionType.DELETE_ITEM_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
