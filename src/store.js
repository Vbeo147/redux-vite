import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const localStore = JSON.parse(window.localStorage.getItem("toDos"));

const SaveStore = (state) => {
  localStorage.setItem("toDos", JSON.stringify(state));
  return state;
};

const reducer = (state = localStore, action) => {
  switch (action.type) {
    case ADD:
      return SaveStore([{ text: action.text, id: Date.now() }, ...state]);
    case DELETE:
      return SaveStore(state.filter((toDo) => toDo.id !== action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
