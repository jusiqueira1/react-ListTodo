import React, { useState, useCallback } from 'react';
import '../App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const addTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask(''); 
    }
  }, [newTask]);

  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      addTask(); 
    }
  }, [addTask]);

  const handleUndo = useCallback(() => {
    if (tasks.length > 0) {
      const newTasks = [...tasks];
      newTasks.pop(); 
      setTasks(newTasks);
    }
  }, [tasks]);

  return (
    <div className="todo-list">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <button onClick={handleUndo} disabled={tasks.length === 0}>
        Desfazer
      </button>
      <ul>
        {}
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
