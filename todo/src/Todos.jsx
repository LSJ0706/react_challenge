import { useState } from "react";

const Todo = ({ todo, onChange, onDelete }) => {
  const [isModifying, setIsModifying] = useState(false);
  let todoContent;
  if (isModifying) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            onChange({
              ...todo,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsModifying(false)}>저장</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.text}
        <button onClick={() => setIsModifying(true)}>수정</button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default Todo;
