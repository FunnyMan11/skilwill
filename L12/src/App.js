import React, { useState, useCallback } from 'react';
import './App.css';
import PendingTasksColumn from './PendingTasksColumn';
import CompletedTasksColumn from './CompletedTasksColumn';

function App() {
  console.log('Rendering App');
  
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add new task to pending tasks
  const addTask = useCallback(() => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setInputValue('');
    }
  }, [inputValue]);

  // Handle Enter key press
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }, [addTask]);

  // Move task from pending to completed
  const completeTask = useCallback((taskId) => {
    setTasks(prevTasks => {
      const taskToComplete = prevTasks.find(task => task.id === taskId);
      if (taskToComplete) {
        // React will batch these updates
        setCompletedTasks(prevCompleted => [...prevCompleted, taskToComplete]);
        return prevTasks.filter(task => task.id !== taskId);
      }
      return prevTasks;
    });
  }, []);

  // Move task from completed back to pending
  const moveBackToPending = useCallback((taskId) => {
    setCompletedTasks(prevCompleted => {
      const taskToMove = prevCompleted.find(task => task.id === taskId);
      if (taskToMove) {
        // React will batch these updates
        setTasks(prevTasks => [...prevTasks, taskToMove]);
        return prevCompleted.filter(task => task.id !== taskId);
      }
      return prevCompleted;
    });
  }, []);

  // Delete task from completed
  const deleteTask = useCallback((taskId) => {
    setCompletedTasks(prevCompleted => prevCompleted.filter(task => task.id !== taskId));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">To-Do List</h1>
        
        {/* Input section */}
        <div className="input-section">
          <input
            type="text"
            className="task-input"
            placeholder="შეიყვანეთ ახალი დავალება..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="add-btn" onClick={addTask}>
            დამატება
          </button>
        </div>

        {/* Two columns */}
        <div className="columns">
          <PendingTasksColumn tasks={tasks} onComplete={completeTask} />
          <CompletedTasksColumn 
            tasks={completedTasks} 
            onMoveBack={moveBackToPending}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

