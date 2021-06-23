// Core
import React from 'react';
import classNames from 'classnames';

// Tools
import { useTodos } from '../../../../../bus/todos/index';
import { todaysDate } from '../../../../../helpers';

// Styles
import './SubmitButtons.scss';

export const SubmitButtons = () => {
  const {
    titleInputText,
    descriptionInputText,
    deadlineDate,
    tag,
    subtasks,
    resetFormFields,
  } = useTodos();

  const { subtaskList } = subtasks;

  const saveButtonClasses = classNames('add-todo-form__btn save-btn', {
    disabled: (titleInputText.length > 0 && titleInputText.length < 3)
      || !titleInputText
      || !tag
      || subtaskList.length < 2,
  });

  const resetButtonClasses = classNames('add-todo-form__btn reset-btn', {
    disabled: !titleInputText
      && !descriptionInputText
      && !tag
      && deadlineDate === todaysDate
      && subtaskList.length === 1,
  });

  return (
    <div className="add-todo-form__submit-buttons">
      <button
        type="button"
        className={resetButtonClasses}
        onClick={resetFormFields}
      >
        Reset
      </button>

      <button
        type="submit"
        className={saveButtonClasses}
      >
        Save
      </button>
    </div>
  );
};
