const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      var user = action.payload;
      var new_state = addUser(state, user);
      return state;
    case "UPDATE":
      user = action.payload;
      new_state = updateUser(state, user);
      return new_state;
    case "DELETE":
      const id = action.payload;
      new_state = deleteUser(state, id);
      return new_state;
    default:
      return state;
  }
};

const updateUser = async (state, user) => {
  var response = await state;
  console.log(user);
  for (let i = 0; i < response.length; i++) {
    if (user.id == response[i].id) {
      var old_user = response[i]
    }
  }

  var index = response.indexOf(old_user);

  if (~index) {
    response[index] = user;
  }
  return response;
};

const addUser = async (state, user) => {
  var response = await state;
  response.push(user);
  return response;
};

const deleteUser = async (state, id) => {
  var response = await state;
  var new_data = response.filter((user) => {
    return user.id != id;
  });
  return new_data;
};

export default userReducer;
