import Todo from "./Todos.jsx";
const TodoList = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
