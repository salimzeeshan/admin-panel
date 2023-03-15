import axios from "axios";
import { legacy_createStore as createStore } from "redux";
import userReducer from "./Reducers/userReducer";

const data = axios
  .get("https://reqres.in/api/users?limit=10")
  .then((response) => {
    return response.data.data;
  });

const store = createStore(userReducer, data);

export default store;
