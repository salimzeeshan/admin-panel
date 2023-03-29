import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/userReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
