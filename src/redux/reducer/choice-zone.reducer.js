const initialState = {
  loading: false,
  data: ''
};
const ChoiceZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ZONE_CHOICE_LIST_LOADING_TRUE':
      return { ...state, loading: true };
    case 'ZONE_CHOICE_LIST_LOADING_FALSE':
      return { ...state, loading: false };
    case 'UPDATE_ZONE_CHOICE_LIST':
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export { ChoiceZoneReducer };
