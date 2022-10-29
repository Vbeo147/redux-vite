import { configureStore, createSlice } from "@reduxjs/toolkit";

const localStore = JSON.parse(localStorage.getItem("toDos"));

const SaveStore = (state) => {
  localStorage.setItem("toDos", JSON.stringify(state));
  return state;
};

const toDos = createSlice({
  name: "toDosReducer",
  initialState: localStore ? localStore : [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
      SaveStore(state);
    },
    remove: (state, action) =>
      SaveStore(state.filter((toDo) => toDo.id !== action.payload)),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
