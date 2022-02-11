import { ActionType } from "../actions/actionType";
const initialState = [
  {
    id: 0,
    name: "mohammad Moradi",
    number: 123456,
    email: "moradi2565@yahoo.com",
  },
  {
    id: 1,
    name: "mohammad mohamadi",
    number: 78945610,
    email: "moradi2565@gmail.com",
  },
];

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_CONTACT:
      return [...state, payload];

    case ActionType.UPDATE_CONTACT:
      const updateState = state.map((contact) => {
        return contact.id === payload.id ? payload : contact;
      });
      return updateState;

    case ActionType.DELETE_CONTACT:
      return (state = state.filter(
        (contact) => contact.id !== payload && contact
      ));
    default:
      return state;
  }
};
