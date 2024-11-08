import React, { useState } from "react";

export default function TodoInput(props) {
  const { todoValue, setTodoValue, handleAddTodos } = props;
  return (
    <header>
      <input
        type="text"
        placeholder="Enter to do..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
