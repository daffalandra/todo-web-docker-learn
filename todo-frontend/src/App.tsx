import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo, CreateTodoRequest } from './types/Todo';
import { todoService } from './services/todoService';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load todos on component mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const todosData = await todoService.getAllTodos();
      setTodos(todosData);
    } catch (err) {
      setError('Failed to load todos. Make sure the backend server is running.');
      console.error('Error loading todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTodo = async (todoData: CreateTodoRequest) => {
    try {
      setLoading(true);
      setError(null);
      const newTodo = await todoService.createTodo(todoData);
      setTodos(prevTodos => [newTodo, ...prevTodos]);
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (id: number, completed: boolean) => {
    try {
      setLoading(true);
      setError(null);
      const updatedTodo = await todoService.updateTodo(id, { completed });
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? updatedTodo : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      await todoService.deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <main className="App-main">
        {error && (
          <div className="error-message">
            {error}
            <button onClick={loadTodos} className="retry-button">
              Retry
            </button>
          </div>
        )}

        <TodoForm onSubmit={handleCreateTodo} isLoading={loading} />
        
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTodo}
          isLoading={loading}
        />
      </main>
    </div>
  );
}

export default App;
