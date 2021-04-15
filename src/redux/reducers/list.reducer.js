import * as actionType from "../constants/list.constants";

export const addToListReducer = (state = { itemList: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        itemList: [...state.itemList, action.payload],
      };
    case actionType.DELETE_ITEM_REQUEST:
      console.log("REDUCER =>");
      return {
        ...state,
        loading: true,
        itemList: state.itemList.filter((item) => item.key !== action.payload),
      };
    case actionType.DELETE_ITEM_SUCCESS:
    case actionType.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionType.DELETE_ITEM_FAIL:
    case actionType.ADD_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
