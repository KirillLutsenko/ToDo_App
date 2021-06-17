// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './TitleInput.scss';

export const TitleInput = () => {
  const {
    todoInfo,
    changeTitleForSelectedTodo,
  } = useTodos();

  const { title } = todoInfo;

  return (
    <div className="add-todo-form__title">
      <label
        htmlFor="title-input"
        className="add-todo-form__label"
      >
        New task
      </label>
      <input
        type="text"
        id="title-input"
        value={title}
        className="add-todo-form__input"
        onChange={changeTitleForSelectedTodo}
        placeholder="Task title"
      />
    </div>
  );
};
