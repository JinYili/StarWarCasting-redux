const previousUrlReducer = (state = null, action) => {
  switch (action.type) {
    case "PREVIOUS":
      return action.payload;
    default:
      return state;
  }
};
export default previousUrlReducer;
