const initialState = {
  loading: false,
  data: ''
};
const ManageZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'KAR_ZONE_LIST_LOADING_TRUE':
      return { ...state, loading: true };
    case 'KAR_ZONE_LIST_LOADING_FALSE':
      return { ...state, loading: false };
    case 'UPDATE_KAR_ZONE_LIST':
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export { ManageZoneReducer };
