import React from 'react';

import { useTodos } from '../../../../../bus/todos/index';

import './DescriptionInput.scss';

export const DescriptionInput = () => {
  const {
    todoInfo,
    changeDescriptionForSelectedTodo,
  } = useTodos();

  const { description } = todoInfo;

  return (
    <div className="add-todo-form__description">
      <label
        htmlFor="form-description"
        className="add-todo-form__label"
      >
        Description
      </label>
      <input
        id="form-description"
        type="text"
        value={description}
        className="add-todo-form__input"
        onChange={changeDescriptionForSelectedTodo}
        placeholder="Describe your event"
      />
    </div>
  );
};
