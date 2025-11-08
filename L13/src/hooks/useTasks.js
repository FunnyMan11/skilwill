import { useState, useCallback } from 'react';

/**
 * Custom hook for managing tasks state
 * Returns tasks, completedTasks, and all task manipulation functions
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = useCallback((taskText) => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText.trim()
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      return true;
    }
    return false;
  }, []);

  const completeTask = useCallback((taskId) => {
    setTasks(prevTasks => {
      const taskToComplete = prevTasks.find(task => task.id === taskId);
      if (taskToComplete) {
        setCompletedTasks(prevCompleted => [...prevCompleted, taskToComplete]);
        return prevTasks.filter(task => task.id !== taskId);
      }
      return prevTasks;
    });
  }, []);

  const moveBackToPending = useCallback((taskId) => {
    setCompletedTasks(prevCompleted => {
      const taskToMove = prevCompleted.find(task => task.id === taskId);
      if (taskToMove) {
        setTasks(prevTasks => [...prevTasks, taskToMove]);
        return prevCompleted.filter(task => task.id !== taskId);
      }
      return prevCompleted;
    });
  }, []);

  const deleteTask = useCallback((taskId) => {
    setCompletedTasks(prevCompleted => prevCompleted.filter(task => task.id !== taskId));
  }, []);

  return {
    tasks,
    completedTasks,
    addTask,
    completeTask,
    moveBackToPending,
    deleteTask
  };
};
