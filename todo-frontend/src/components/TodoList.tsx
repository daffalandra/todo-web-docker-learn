import React from 'react';
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  isLoading: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  onDelete,
  isLoading,
}) => {
  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <h3>No todos yet!</h3>
        <p>Add your first todo above to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>Your Todos ({todos.length})</h2>
        <div className="todo-stats">
          <span className="stat pending">
            Pending: {pendingTodos.length}
          </span>
          <span className="stat completed">
            Completed: {completedTodos.length}
          </span>
        </div>
      </div>

      {pendingTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Pending</h3>
          {pendingTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
              isLoading={isLoading}
            />
          ))}
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Completed</h3>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
              isLoading={isLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
