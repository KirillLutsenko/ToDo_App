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
        value={deadline}
        min={todaysDate}
        className="add-todo-form__deadline-input"
        onChange={changeDeadlineDateForSelectedTodo}
      />
    </div>
  );
};
