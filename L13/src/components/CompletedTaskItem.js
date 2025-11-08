import React, { memo } from 'react';

const CompletedTaskItem = memo(({ task, onMoveBack, onDelete }) => {
  console.log(`[CompletedTaskItem] Rendering task: ${task.text}`);
  
  const handleMoveBack = () => {
    onMoveBack(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task-item completed">
      <span className="task-text">{task.text}</span>
      <div className="btn-group">
        <button 
          className="btn back-btn"
          onClick={handleMoveBack}
        >
          უკან
        </button>
        <button 
          className="btn delete-btn"
          onClick={handleDelete}
        >
          წაშლა
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if task id, text, or callback functions changed
  return (
    prevProps.task.id === nextProps.task.id &&
    prevProps.task.text === nextProps.task.text &&
    prevProps.onMoveBack === nextProps.onMoveBack &&
    prevProps.onDelete === nextProps.onDelete
  );
});

CompletedTaskItem.displayName = 'CompletedTaskItem';

export default CompletedTaskItem;
