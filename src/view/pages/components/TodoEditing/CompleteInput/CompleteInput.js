// Core
import React from 'react';
import classNames from 'classnames';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './CompleteInput.scss';

export const CompleteInput = () => {
  const {
    todoInfo,
    setSelectedTodoCompleteStatus,
  } = useTodos();
  const { completed } = todoInfo;

  const checkboxStyle = classNames('add-todo-form__complete-checkbox-text', {
    'add-todo-form__complete-checkbox-text-selected': completed,
  });

  return (
    <label
      className="add-todo-form__todo-checkbox-block"
      htmlFor="complete-checkbox"
    >
      <input
        type="checkbox"
        id="complete-checkbox"
        name="complete-status"
        className="add-todo-form__complete-checkbox"
        onChange={setSelectedTodoCompleteStatus}
        checked={completed}
      />
      <span
        className={checkboxStyle}
      >
        Mark as complete
      </span>
    </label>
  );
};
