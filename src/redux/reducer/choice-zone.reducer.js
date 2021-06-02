const initialState = {
  loading1: false,
  data1: ''
};
const ChoiceZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ZONE_CHOICE_LIST_LOADING_TRUE':
      return { ...state, loading1: true };
    case 'ZONE_CHOICE_LIST_LOADING_FALSE':
      return { ...state, loading1: false };
    case 'UPDATE_ZONE_CHOICE_LIST':
      return { ...state, data1: action.data };
    default:
      return state;
  }
};

export { ChoiceZoneReducer };
