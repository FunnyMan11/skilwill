import React, { memo } from 'react';

const TaskItem = memo(({ task, onComplete }) => {
  console.log(`[TaskItem] Rendering task: ${task.text}`);
  
  const handleComplete = () => {
    onComplete(task.id);
  };

  return (
    <div className="task-item">
      <span className="task-text">{task.text}</span>
      <button 
        className="btn complete-btn"
        onClick={handleComplete}
      >
        დასრულება
      </button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if task id, text, or onComplete function changed
  return (
    prevProps.task.id === nextProps.task.id &&
    prevProps.task.text === nextProps.task.text &&
    prevProps.onComplete === nextProps.onComplete
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
