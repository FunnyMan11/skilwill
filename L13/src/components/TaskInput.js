import React, { memo, useRef, useEffect } from 'react';

const TaskInput = memo(({ value, onChange, onAdd, onKeyPress }) => {
  const inputRef = useRef(null);

  // Focus input on mount (optional - can be removed if not needed)
  useEffect(() => {
    // Uncomment if you want auto-focus
    // inputRef.current?.focus();
  }, []);

  return (
    <div className="input-section">
      <input
        ref={inputRef}
        type="text"
        className="task-input"
        placeholder="შეიყვანეთ ახალი დავალება..."
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="add-btn" onClick={onAdd}>
        დამატება
      </button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if value or callbacks changed
  return (
    prevProps.value === nextProps.value &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.onAdd === nextProps.onAdd &&
    prevProps.onKeyPress === nextProps.onKeyPress
  );
});

TaskInput.displayName = 'TaskInput';

export default TaskInput;
