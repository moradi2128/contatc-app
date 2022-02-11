import { combineReducers } from "redux";
import { contactReducer } from "./reducers/contactReducer";
export const reducers = combineReducers({
  allContact: contactReducer,
});
