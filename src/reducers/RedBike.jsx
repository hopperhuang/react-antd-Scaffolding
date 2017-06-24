const RedBike = (state = 0, action) => {
  switch (action.type) {
    case 'numberAdd': {
      const newState = state + action.payload;
      return newState;
    } // state增加。
    default:
      return state;
  }
};

export default RedBike;
