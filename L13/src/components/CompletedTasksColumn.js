import React, { memo, useMemo } from 'react';
import CompletedTaskItem from './CompletedTaskItem';

const CompletedTasksColumn = memo(({ tasks, onMoveBack, onDelete }) => {
  console.log('[CompletedTasksColumn] Rendering');
  
  // Memoize the tasks list to prevent unnecessary re-renders
  const tasksList = useMemo(() => {
    if (tasks.length === 0) {
      return <p className="empty-message">დავალებები არ არის</p>;
    }
    
    return tasks.map(task => (
      <CompletedTaskItem 
        key={task.id} 
        task={task} 
        onMoveBack={onMoveBack}
        onDelete={onDelete}
      />
    ));
  }, [tasks, onMoveBack, onDelete]);

  return (
    <div className="column">
      <h2 className="column-title completed">შესრულებული დავალებები</h2>
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
  
  return (
    prevIds === nextIds &&
    prevProps.onMoveBack === nextProps.onMoveBack &&
    prevProps.onDelete === nextProps.onDelete
  );
});

CompletedTasksColumn.displayName = 'CompletedTasksColumn';

export default CompletedTasksColumn;
