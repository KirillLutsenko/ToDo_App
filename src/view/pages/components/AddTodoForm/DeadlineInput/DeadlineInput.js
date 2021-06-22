// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';
import { todaysDate } from '../../../../../helpers';

// Styles
import './DeadlineInput.scss';

const moment = require('moment');

export const DeadlineInput = () => {
  const {
    deadlineDate,
    changeDeadlineDate,
  } = useTodos();

  const formattedDate = moment(deadlineDate).format('DD MMM YYYY');

  return (
    <div className="add-todo-form__deadline deadline">
      <label
        htmlFor="form-calendar"
        className="add-todo-form__label"
      >
        <span className="deadline__title">Due to</span>

        <span className="deadline__text">
          {formattedDate}
        </span>

        <input
          type="date"
          id="form-calendar"
          name="calendar"
          value={deadlineDate}
          min={todaysDate}
          className="add-todo-form__deadline-input deadline-input"
          onChange={changeDeadlineDate}
        />
      </label>

      {deadlineDate === '' && (
        <span className="add-todo-form__warning-error warning-error">
          Deadline is required
        </span>
      )}
    </div>
  );
};
