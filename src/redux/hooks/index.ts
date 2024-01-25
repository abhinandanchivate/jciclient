import { TypedUseSelectorHook } from "react-redux";
import store from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import rootReducers from "../reducers";
export type AppState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
