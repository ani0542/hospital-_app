const initialState = {
  cvcLoading: false,
  cvcList: [],
  allCvcLoading: false,
  allCvcList: [],
  cvcDetailLoading: false,
  cvcDetail: '',
};
const ManageVaccineCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VACCINE_CENTER_LIST_LOADING_TRUE':
      return { ...state, cvcLoading: true };
    case 'VACCINE_CENTER_LIST_LOADING_FALSE':
      return { ...state, cvcLoading: false };
    case 'UPDATE_VACCINE_CENTER_LIST':
      return { ...state, cvcList: action.data };
    default:
      return state;
  }
};

const AllManageVaccineCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_VACCINE_CENTER_LIST_LOADING_TRUE':
      return { ...state, allCvcLoading: true };
    case 'ALL_VACCINE_CENTER_LIST_LOADING_FALSE':
      return { ...state, allCvcLoading: false };
    case 'UPDATE_ALL_VACCINE_CENTER_LIST':
      return { ...state, allCvcList: action.data };
    default:
      return state;
  }
};

const ManageVaccineCenterDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VACCINE_CENTER_DETAIL_LOADING_TRUE':
      return { ...state, cvcDetailLoading: true };
    case 'VACCINE_CENTER_DETAIL_LOADING_FALSE':
      return { ...state, cvcDetailLoading: false };
    case 'UPDATE_VACCINE_CENTER_DETAIL': 
      return { ...state, cvcDetail: action.data };
    default:
      return state;
  }
};

export { ManageVaccineCenterReducer, AllManageVaccineCenterReducer, ManageVaccineCenterDetailReducer };
