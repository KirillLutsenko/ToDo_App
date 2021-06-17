// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../bus/todos/index';

// Styles
import './NewTaskButton.scss';

export const NewTaskButton = () => {
  const { setVisibleNewTaskForm } = useTodos();

  return (
    <button
      type="button"
      className="app__new-task-btn new-task-btn"
      onClick={setVisibleNewTaskForm}
    >
      +
    </button>
  );
};
