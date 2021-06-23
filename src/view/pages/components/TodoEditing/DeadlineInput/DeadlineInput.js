// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './DeadlineInput.scss';

const moment = require('moment');

export const DeadlineInput = () => {
  const {
    todoInfo,
    changeDeadlineDateForSelectedTodo,
  } = useTodos();

  const { deadline } = todoInfo;

  const todaysDate = moment().format('YYYY-MM-DD');

  const formattedDate = moment(deadline).format('DD MMM YYYY');

  return (
    <div className="add-todo-form__deadline">
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
          value={deadline}
          min={todaysDate}
          className="add-todo-form__deadline-input deadline-input"
          onChange={changeDeadlineDateForSelectedTodo}
        />
      </label>

      {todoInfo.deadline === '' && (
        <span className="add-todo-form__warning-error warning-error">
          Deadline is required
        </span>
      )}
    </div>
  );
};
