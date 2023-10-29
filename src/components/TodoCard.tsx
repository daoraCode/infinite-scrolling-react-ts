import { FC } from "react";
import { todo } from "../types/todo";

interface TodoCardProps extends React.HTMLAttributes<HTMLParagraphElement> {
  todo: todo;
}

export const TodoCard: FC<TodoCardProps> = ({ todo, ...props }) => {
  return <div className="todo-card" key={todo.id} {...props}>{todo.title}</div>;
};
