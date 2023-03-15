export const deleteUser = (id) => {
  return { type: "DELETE", payload: id };
};

export const addUser = (user) => {
  return { type: "ADD", payload: user };
};

export const updateUser = (id) => {
  return { type: "UPDATE", payload: id };
};

