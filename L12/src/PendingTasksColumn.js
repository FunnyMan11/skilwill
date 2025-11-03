import React, { memo } from 'react';
import TaskItem from './TaskItem';

const PendingTasksColumn = memo(({ tasks, onComplete }) => {
  console.log('Rendering PendingTasksColumn');
  
  return (
    <div className="column">
      <h2 className="column-title">შესასრულებელი დავალებები</h2>
      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p className="empty-message">დავალებები არ არის</p>
        ) : (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onComplete={onComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if tasks array length changed or if task IDs changed
  if (prevProps.tasks.length !== nextProps.tasks.length) {
    return false;
  }
  
  const prevIds = prevProps.tasks.map(t => t.id).sort().join(',');
  const nextIds = nextProps.tasks.map(t => t.id).sort().join(',');
  
  return prevIds === nextIds && prevProps.onComplete === nextProps.onComplete;
});

PendingTasksColumn.displayName = 'PendingTasksColumn';

export default PendingTasksColumn;
