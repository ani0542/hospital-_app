const initialState = {
  access: ''
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACCESS_CONTROL':
      return { ...state, access: action.data?.landing_screen };
    default:
      return state;
  }
};

export { UserReducer };
