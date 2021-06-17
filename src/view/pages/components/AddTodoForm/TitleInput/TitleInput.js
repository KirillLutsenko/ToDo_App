// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './TitleInput.scss';

export const TitleInput = () => {
  const {
    titleInputText,
    changeTitleInputText,
  } = useTodos();

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
        value={titleInputText}
        className="add-todo-form__input"
        onChange={changeTitleInputText}
        placeholder="Task title"
      />
    </div>
  );
};
