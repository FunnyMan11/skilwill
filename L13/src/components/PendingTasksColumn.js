import React, { memo, useMemo } from 'react';
import TaskItem from './TaskItem';

const PendingTasksColumn = memo(({ tasks, onComplete }) => {
  console.log('[PendingTasksColumn] Rendering');
  
  // Memoize the tasks list to prevent unnecessary re-renders
  const tasksList = useMemo(() => {
    if (tasks.length === 0) {
      return <p className="empty-message">დავალებები არ არის</p>;
    }
    
    return tasks.map(task => (
      <TaskItem 
        key={task.id} 
        task={task} 
        onComplete={onComplete}
      />
    ));
  }, [tasks, onComplete]);

  return (
    <div className="column">
      <h2 className="column-title">შესასრულებელი დავალებები</h2>
      <div className="tasks-list">
        {tasksList}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if tasks array length or IDs changed
  if (prevProps.tasks.length !== nextProps.tasks.length) {
    return false;
  }
  
  // Check if task IDs are the same
  const prevIds = prevProps.tasks.map(t => t.id).sort().join(',');
  const nextIds = nextProps.tasks.map(t => t.id).sort().join(',');
  
  return prevIds === nextIds && prevProps.onComplete === nextProps.onComplete;
});

PendingTasksColumn.displayName = 'PendingTasksColumn';

export default PendingTasksColumn;
