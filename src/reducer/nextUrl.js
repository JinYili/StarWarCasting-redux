const nextUrlReducer = (
  state = "https://swapi.co/api/people/?format=json",
  action
) => {
  switch (action.type) {
    case "NEXT":
      return action.payload;
    default:
      return state;
  }
};
export default nextUrlReducer;
