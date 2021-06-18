// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';
import { todaysDate } from '../../../../../helpers';

// Styles
import './DeadlineInput.scss';

export const DeadlineInput = () => {
  const {
    deadlineDate,
    changeDeadlineDate,
  } = useTodos();

  return (
    <div className="add-todo-form__deadline">
      <label
        htmlFor="form-calendar"
        className="add-todo-form__label"
      >
        Due to
      </label>
      <input
        type="date"
        id="form-calendar"
        name="calendar"
        value={deadlineDate}
        min={todaysDate}
        className="add-todo-form__deadline-input"
        onChange={changeDeadlineDate}
      />
    </div>
  );
};
