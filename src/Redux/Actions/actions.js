import axios from "axios";

export const fetchUsers = () => async (dispatch, getState) => {
  const response = getState().userReducer;

  if (response.length === 0) {
    let response = await axios.get("https://reqres.in/api/users?per_page=5");
    response = response.data.data.map((user) => ({
      ...user,
      birthday: `${user.id <= 9 ? `0${user.id}` : `${user.id}`}/03/2023`,
    }));
    dispatch({ type: "FETCH", payload: response });
  }
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
