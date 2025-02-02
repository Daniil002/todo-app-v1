import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState()
  return (
    <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
