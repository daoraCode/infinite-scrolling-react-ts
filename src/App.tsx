import { useEffect, useState } from 'react';
import { TodoCard } from './components/TodoCard';
import { todo } from "./types/todo";
import './App.css';

export const App = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const fecthTodos = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=1`,
    );
    const data = await res.json();
    setTodos(data);
  };

  // all fetched tasks
  console.log(todos);

  useEffect(() => {
    fecthTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
