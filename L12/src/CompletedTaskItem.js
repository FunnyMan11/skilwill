import React, { memo } from 'react';

const CompletedTaskItem = memo(({ task, onMoveBack, onDelete }) => {
  console.log(`Rendering completed task: ${task.text}`);
  
  return (
    <div className="task-item completed">
      <span className="task-text">{task.text}</span>
      <div className="btn-group">
        <button 
          className="btn back-btn"
          onClick={() => onMoveBack(task.id)}
        >
          უკან
        </button>
        <button 
          className="btn delete-btn"
          onClick={() => onDelete(task.id)}
        >
          წაშლა
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if task id or text changed
  return prevProps.task.id === nextProps.task.id && 
         prevProps.task.text === nextProps.task.text &&
         prevProps.onMoveBack === nextProps.onMoveBack &&
         prevProps.onDelete === nextProps.onDelete;
});

CompletedTaskItem.displayName = 'CompletedTaskItem';

export default CompletedTaskItem;
