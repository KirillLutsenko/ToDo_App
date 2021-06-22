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
    warnings,
  } = useTodos();

  return (
    <div className="add-todo-form__title">
      <input
        type="text"
        id="title-input"
        value={titleInputText}
        className="add-todo-form__input title-input"
        onChange={changeTitleInputText}
        placeholder="New task"
      />

      {warnings.titleWarning && (
        <span className="add-todo-form__warning-error">
          Task title is too short
        </span>
      )}
    </div>
  );
};
