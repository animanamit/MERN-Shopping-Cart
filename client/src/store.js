// connect up your combined reducer in here?
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import productReducer from "./components/reducers/productReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  productReducer,
  initialState,
  applyMiddleware(middleware)
);

export default store;