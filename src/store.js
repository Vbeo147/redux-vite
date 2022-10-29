import { legacy_createStore as createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const localStore = JSON.parse(localStorage.getItem("toDos"));

const SaveStore = (state) => {
  localStorage.setItem("toDos", JSON.stringify(state));
  return state;
};

if (!localStore) {
  SaveStore([]);
}

// const reducer = (state = localStore, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return SaveStore([{ text: action.payload, id: Date.now() }, ...state]);
//     case deleteToDo.type:
//       return SaveStore(state.filter((toDo) => toDo.id !== action.payload));
//     default:
//       return state;
//   }
// };

const reducer = createReducer(localStore, {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
    SaveStore(state);
  },
  [deleteToDo]: (state, action) =>
    SaveStore(state.filter((toDo) => toDo.id !== action.payload)),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
