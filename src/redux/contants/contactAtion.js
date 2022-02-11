import { ActionType } from "../actions/actionType";

export const addContact = (contact) => {
  return {
    type: ActionType.ADD_CONTACT,
    payload: contact,
  };
};

export const updateContact = (contact) => {
  return {
    type: ActionType.UPDATE_CONTACT,
    payload: contact,
  };
};
export const deleteContact = (contact) => {
  return {
    type: ActionType.DELETE_CONTACT,
    payload: contact,
  };
};
