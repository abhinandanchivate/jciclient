//it will hold the listof all reducers in auth modulesred

import { CoreState } from "../types/CoreState";
import { CoreActionTypes } from "../types/core.action.types";
import { CLEAR_ALERTS, REMOVE_ALERT, SET_ALERT } from "../types/core.constants";

const initialState: CoreState = {
  alertTypes: [],
};

const coreReducer = (
  state: CoreState = initialState,
  action: CoreActionTypes
) => {
  switch (action.type) {
    case SET_ALERT:
      //state.alertTypes.push(action.payload);
      return { ...state, alertTypes: [...state.alertTypes, action.payload] };

    case REMOVE_ALERT:
      const data = state.alertTypes.filter(
        (alert) => alert.id !== action.payload.id
      );
      return { ...state, alertTypes: data };
    case CLEAR_ALERTS:
      return { alertTypes: [] };
    default:
      return state;
  }
};

export default coreReducer;
