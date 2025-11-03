import React, { memo } from 'react';
import CompletedTaskItem from './CompletedTaskItem';

const CompletedTasksColumn = memo(({ tasks, onMoveBack, onDelete }) => {
  console.log('Rendering CompletedTasksColumn');
  
  return (
    <div className="column">
      <h2 className="column-title completed">შესრულებული დავალებები</h2>
      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p className="empty-message">დავალებები არ არის</p>
        ) : (
          tasks.map(task => (
            <CompletedTaskItem 
              key={task.id} 
              task={task} 
              onMoveBack={onMoveBack}
              onDelete={onDelete}
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
  
  return prevIds === nextIds && 
         prevProps.onMoveBack === nextProps.onMoveBack &&
         prevProps.onDelete === nextProps.onDelete;
});

CompletedTasksColumn.displayName = 'CompletedTasksColumn';

export default CompletedTasksColumn;
