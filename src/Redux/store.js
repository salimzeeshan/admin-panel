import { legacy_createStore as createStore } from "redux";
import rootReducer from "./Reducers/userReducer";

const store = createStore(rootReducer);

export default store;
