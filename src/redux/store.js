import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { addToListReducer } from "./reducers/list.reducer";

const reducer = combineReducers({
  listReducer: addToListReducer,
});

const middleware = [thunk];

//* Crear store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
