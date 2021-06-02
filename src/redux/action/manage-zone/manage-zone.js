import {
  getZones, getChoiceZones
} from '../../../Services/manage-zone.service';

const fetchKarwinZoneList = () => {
  return async (dispatch) => {
    dispatch({ type: 'KAR_ZONE_LIST_LOADING_TRUE' });
    const zone = await getZones();
    dispatch({
      type: 'UPDATE_KAR_ZONE_LIST',
      data: zone.data,
    });
    dispatch({ type: 'KAR_ZONE_LIST_LOADING_FALSE' });
  };
};

const fetchZoneChoiceList = () => {
  return async (dispatch) => {
    dispatch({ type: 'ZONE_CHOICE_LIST_LOADING_TRUE' });
    const zone = await getChoiceZones(); 
    dispatch({
      type: 'UPDATE_ZONE_CHOICE_LIST',
      data: zone.data,
    });
    dispatch({ type: 'ZONE_CHOICE_LIST_LOADING_FALSE' });
  };
};

export {
  fetchKarwinZoneList,
  fetchZoneChoiceList
};
