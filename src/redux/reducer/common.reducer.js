const initialState = {
  vaccines: ''
};
const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VACCINE':
      return { ...state, vaccines: action.data };
    default:
      return state;
  }
};

export { CommonReducer };
