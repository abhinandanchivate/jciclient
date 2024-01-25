import { AlertType } from "./AlertType";
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from "./core.constants";
export interface SetAlertType {
  type: typeof SET_ALERT;
  payload: AlertType;
}
export interface RemoveAlertType {
  type: typeof REMOVE_ALERT;
  payload: {
    id: string;
  };
}
export interface ClearAlertsType {
  type: typeof CLEAR_ALERTS;
}
export type CoreActionTypes = SetAlertType | RemoveAlertType | ClearAlertsType;
