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
