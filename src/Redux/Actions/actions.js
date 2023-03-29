import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get("https://reqres.in/api/users?per_page=5");
  dispatch({ type: "FETCH", payload: response.data.data });
};

export const addUser = (user) => {
  return { type: "ADD", payload: user };
};

export const updateUser = (id) => {
  return { type: "UPDATE", payload: id };
};

export const deleteUser = (id) => {
  return { type: "DELETE", payload: id };
};

export const loginUser = (props) => {
  return { type: "LOGIN", payload: props };
};

export const logoutUser = (props) => {
  return { type: "LOGOUT", payload: props };
};
