import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

function UpdateTodo() {
  const [selectedId, setSelectedId] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch;

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: selectedId, text }));
    setText("");
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Update your todo"
      />
      <button onClick={updateTodoHandler}>Update</button>
    </>
  );
}

export default UpdateTodo;
