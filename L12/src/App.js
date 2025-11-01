import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add new task to pending tasks
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Move task from pending to completed
  const completeTask = (taskId) => {
    const taskToComplete = tasks.find(task => task.id === taskId);
    if (taskToComplete) {
      setCompletedTasks([...completedTasks, taskToComplete]);
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  // Move task from completed back to pending
  const moveBackToPending = (taskId) => {
    const taskToMove = completedTasks.find(task => task.id === taskId);
    if (taskToMove) {
      setTasks([...tasks, taskToMove]);
      setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
    }
  };

  // Delete task from completed
  const deleteTask = (taskId) => {
    setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
  };

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
          {/* Pending tasks column */}
          <div className="column">
            <h2 className="column-title">შესასრულებელი დავალებები</h2>
            <div className="tasks-list">
              {tasks.length === 0 ? (
                <p className="empty-message">დავალებები არ არის</p>
              ) : (
                tasks.map(task => (
                  <div key={task.id} className="task-item">
                    <span className="task-text">{task.text}</span>
                    <button 
                      className="btn complete-btn"
                      onClick={() => completeTask(task.id)}
                    >
                      დასრულება
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Completed tasks column */}
          <div className="column">
            <h2 className="column-title completed">შესრულებული დავალებები</h2>
            <div className="tasks-list">
              {completedTasks.length === 0 ? (
                <p className="empty-message">დავალებები არ არის</p>
              ) : (
                completedTasks.map(task => (
                  <div key={task.id} className="task-item completed">
                    <span className="task-text">{task.text}</span>
                    <div className="btn-group">
                      <button 
                        className="btn back-btn"
                        onClick={() => moveBackToPending(task.id)}
                      >
                        უკან
                      </button>
                      <button 
                        className="btn delete-btn"
                        onClick={() => deleteTask(task.id)}
                      >
                        წაშლა
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

