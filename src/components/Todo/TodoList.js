import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/actions";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    console.log(id, "remove");
    dispatch({
      type: actionTypes.REMOVE_TODO,
      payload: {
        id: id,
      },
    });
  };
  const doneHandler = (id) => {
    console.log(id, "done");
    dispatch({
      type: actionTypes.DONE_TODO,
      payload: {
        id: id,
      },
    });
  };

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {notes.map((note) => {
        return (
          <div
            onClick={() => doneHandler(note.id)}
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
          >
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
            <span
              onClick={() => removeHandler(note.id)}
              className={`material-icons ${classes.delete}`}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
