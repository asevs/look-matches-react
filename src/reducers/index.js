const initialState = {
  twitters: [{ id: 1, content: 'dsadsadsadas' }],
};

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
};

export default rootReducer;
