import React, { memo } from 'react';

const TaskItem = memo(({ task, onComplete }) => {
  console.log(`Rendering pending task: ${task.text}`);
  
  return (
    <div className="task-item">
      <span className="task-text">{task.text}</span>
      <button 
        className="btn complete-btn"
        onClick={() => onComplete(task.id)}
      >
        დასრულება
      </button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if task id or text changed
  return prevProps.task.id === nextProps.task.id && 
         prevProps.task.text === nextProps.task.text &&
         prevProps.onComplete === nextProps.onComplete;
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
