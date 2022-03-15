import { notes } from "../../notes";
import * as actionTypes from "./actions";
const init = { notes: notes };
console.log(init);

let uuid = 3;

const reducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        notes: [
          ...state.notes,
          {
            id: ++uuid,
            ...action.payload,
            done: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      return {
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case actionTypes.DONE_TODO:
      console.log(action.payload);
      const done_note = state.notes.find(
        (note) => note.id === action.payload.id
      );
      done_note.done = !done_note.done;
      return {
        notes: [
          ...state.notes.filter((n) => n.id !== action.payload.id),
          done_note,
        ].sort((note1, note2) => note1.id - note2.id),
      };
    default:
      return state;
  }
};

export default reducer;
