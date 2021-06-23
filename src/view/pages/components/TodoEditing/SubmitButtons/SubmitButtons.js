// Core
import React from 'react';
import classNames from 'classnames';

// Tools
import { useTodos } from '../../../../../bus/todos/index';
import { todaysDate } from '../../../../../helpers';

export const SubmitButtons = () => {
  const { todoInfo, resetTodoFormFields } = useTodos();

  const saveButtonClasses = classNames('add-todo-form__btn save-btn', {
    disabled: (todoInfo.title.length > 0 && todoInfo.title.length < 3)
      || !todoInfo.todoTag
      || todoInfo.subtaskList.length < 2,
  });

  const resetButtonClasses = classNames('add-todo-form__btn reset-btn', {
    disabled: !todoInfo.title
      && !todoInfo.description
      && todoInfo.deadline === todaysDate
      && todoInfo.subtaskList.length === 1
      && !todoInfo.todoTag,
  });

  return (
    <div className="add-todo-form__submit-buttons">
      <button
        type="button"
        className={resetButtonClasses}
        onClick={resetTodoFormFields}
      >
        Reset
      </button>

      <button
        className={saveButtonClasses}
        type="submit"
      >
        Save
      </button>
    </div>
  );
};
