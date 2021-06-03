import {
  getAllVaccines
} from '../../../Services/common.service';

const fetchVaccines = () => {
  return async (dispatch) => {
    const access = await getAllVaccines();
    dispatch({
      type: 'UPDATE_VACCINE',
      data: access.data.vaccines ? access.data.vaccines : [],
    });
  };
};

export {
  fetchVaccines
};
