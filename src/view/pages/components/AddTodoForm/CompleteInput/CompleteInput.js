// Core
import React from 'react';
import classNames from 'classnames';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './CompleteInput.scss';

export const CompleteInput = () => {
  const {
    completeStatus,
    setCompleteStatus,
  } = useTodos();

  const checkboxStyle = classNames('add-todo-form__complete-checkbox-text', {
    'add-todo-form__complete-checkbox-text-selected': completeStatus,
  });

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
        className={checkboxStyle}
      >
        Mark as complete
      </span>
    </label>
  );
};
