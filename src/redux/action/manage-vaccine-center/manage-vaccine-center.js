import {
  getCVCByZone, getAllCVCByZone, getCVCDetail
} from '../../../Services/manage-vaccine-center.service';

const fetchKarwinVaccineCenterByZone = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'VACCINE_CENTER_LIST_LOADING_TRUE' });
    const cvc = await getCVCByZone(id);
    dispatch({
      type: 'UPDATE_VACCINE_CENTER_LIST',
      data: cvc.data.result ? cvc.data.result : [],
    });
    dispatch({ type: 'VACCINE_CENTER_LIST_LOADING_FALSE' });
  };
};

const fetchAllVaccineCenterByZone = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'ALL_VACCINE_CENTER_LIST_LOADING_TRUE' });
    const cvc = await getAllCVCByZone(id);
    dispatch({
      type: 'UPDATE_ALL_VACCINE_CENTER_LIST',
      data: cvc.data.result ? cvc.data.result : [],
    });
    dispatch({ type: 'ALL_VACCINE_CENTER_LIST_LOADING_FALSE' });
  };
}

const fetchKarwinVaccineCenterDetail = (zoneId, cvcId) => {
  return async (dispatch) => {
    dispatch({ type: 'VACCINE_CENTER_DETAIL_LOADING_TRUE' });
    const cvc = await getCVCDetail(zoneId, cvcId);
    dispatch({
      type: 'UPDATE_VACCINE_CENTER_DETAIL',
      data: cvc.data.result ? cvc.data.result : [],
    });
    dispatch({ type: 'VACCINE_CENTER_DETAIL_LOADING_FALSE' });
  };
};
export {
  fetchKarwinVaccineCenterByZone,
  fetchAllVaccineCenterByZone, fetchKarwinVaccineCenterDetail
};
