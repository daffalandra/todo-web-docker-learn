import React, { useState } from 'react';
import { CreateTodoRequest } from '../types/Todo';
import './TodoForm.css';

interface TodoFormProps {
  onSubmit: (todo: CreateTodoRequest) => void;
  isLoading: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, isLoading }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({
        title: title.trim(),
        description: description.trim() || undefined,
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>Add New Todo</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Todo title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={isLoading}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Description (optional)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
          className="form-textarea"
          rows={3}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !title.trim()}
        className="submit-button"
      >
        {isLoading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
