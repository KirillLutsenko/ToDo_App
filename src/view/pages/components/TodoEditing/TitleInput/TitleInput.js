// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './TitleInput.scss';

export const TitleInput = () => {
  const {
    todoInfo,
    warnings,
    changeTitleForSelectedTodo,
  } = useTodos();

  const { title } = todoInfo;

  return (
    <div className="add-todo-form__title">
      <input
        type="text"
        id="title-input"
        value={title}
        className="add-todo-form__input  title-input"
        onChange={changeTitleForSelectedTodo}
        placeholder="Task title"
      />

      {warnings.titleWarning && (
        <span className="add-todo-form__warning-error">
          Task title is too short
        </span>
      )}
    </div>
  );
};
