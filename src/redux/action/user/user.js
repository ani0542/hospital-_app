import {
  getAccessControl
} from '../../../Services/user.service';

const fetchAccessControl = () => {
  return async (dispatch) => {
    const access = await getAccessControl();
    dispatch({
      type: 'UPDATE_ACCESS_CONTROL',
      data: access.data,
    });
  };
};

export {
  fetchAccessControl
};
