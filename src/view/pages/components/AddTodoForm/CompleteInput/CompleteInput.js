// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './CompleteInput.scss';

export const CompleteInput = () => {
  const {
    completeStatus,
    setCompleteStatus,
  } = useTodos();

  return (
    <label
      className="add-todo-form__checkbox-block"
      htmlFor="complete-checkbox"
    >
      <input
        type="checkbox"
        id="complete-checkbox"
        name="complete-status"
        className="add-todo-form__complete-checkbox"
        onChange={setCompleteStatus}
        checked={completeStatus}
      />
      <span
        className="add-todo-form__complete-checkbox-text"
      >
        Mark as complete
      </span>
    </label>
  );
};
