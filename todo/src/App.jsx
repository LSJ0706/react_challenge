import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(text) {
    const uuid = crypto.randomUUID();
    setTodos([
      ...todos,
      {
        id: uuid,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(tId) {
    setTodos(todos.filter((todo) => todo.id !== tId));
  }

  return (
    <>
      <h1>Todos</h1>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};

export default App;
