const usersReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;

    case "UPDATE_CURRENT_USER":
      return states.map((state) =>
        state._id === action.payload.id ? action.payload : state
      );
    //state holds all the users state and by comparing state.id we are comparing all the users id with the existing users id if it matched then we are giving action.payload else we are giving it's default state.S

    // If there is a match, it replaces the existing user with the updated user data contained in action.payload.

    default:
      return states;
  }
};

export default usersReducer;
