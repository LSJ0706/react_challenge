import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          addTodo(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
