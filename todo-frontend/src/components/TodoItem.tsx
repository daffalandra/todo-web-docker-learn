import React from 'react';
import { Todo } from '../types/Todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  isLoading: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
  isLoading,
}) => {
  const handleToggleComplete = () => {
    onToggleComplete(todo.id, !todo.completed);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      onDelete(todo.id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-header">
          <h3 className="todo-title">{todo.title}</h3>
          <div className="todo-actions">
            <button
              onClick={handleToggleComplete}
              disabled={isLoading}
              className={`toggle-button ${todo.completed ? 'complete' : 'incomplete'}`}
            >
              {todo.completed ? '✓' : '○'}
            </button>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="delete-button"
            >
              🗑️
            </button>
          </div>
        </div>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        <div className="todo-meta">
          <span className="todo-date">
            Created: {formatDate(todo.created_at)}
          </span>
          {todo.completed && (
            <span className="todo-status">Completed</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
