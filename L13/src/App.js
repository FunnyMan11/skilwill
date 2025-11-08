import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import { useTasks } from './hooks/useTasks';
import TaskInput from './components/TaskInput';
import PendingTasksColumn from './components/PendingTasksColumn';
import CompletedTasksColumn from './components/CompletedTasksColumn';

function App() {
  console.log('[App] Rendering');
  
  const [inputValue, setInputValue] = useState('');
  const { tasks, completedTasks, addTask, completeTask, moveBackToPending, deleteTask } = useTasks();

  // Memoize input change handler
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Memoize add task handler
  const handleAddTask = useCallback(() => {
    if (addTask(inputValue)) {
      setInputValue('');
    }
  }, [inputValue, addTask]);

  // Memoize key press handler
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }, [handleAddTask]);

  // Memoize task statistics (if needed for future features)
  const taskStats = useMemo(() => {
    return {
      total: tasks.length + completedTasks.length,
      pending: tasks.length,
      completed: completedTasks.length
    };
  }, [tasks.length, completedTasks.length]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">To-Do List</h1>
        
        <TaskInput
          value={inputValue}
          onChange={handleInputChange}
          onAdd={handleAddTask}
          onKeyPress={handleKeyPress}
        />

        <div className="columns">
          <PendingTasksColumn 
            tasks={tasks} 
            onComplete={completeTask} 
          />
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
