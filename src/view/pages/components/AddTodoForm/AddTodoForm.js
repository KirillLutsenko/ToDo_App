// Core
import React from 'react';
import classNames from 'classnames';

// Components
import { TitleInput } from './TitleInput';
import { DescriptionInput } from './DescriptionInput';
import { DeadlineInput } from './DeadlineInput';
import { CompleteInput } from './CompleteInput';
import { Checklist } from './Checklist';

// Tools
import { useTodos } from '../../../../bus/todos/index';

// Styles
import './AddTodoForm.scss';

export const AddTodoForm = () => {
  const {
    titleInputText,
    descriptionInputText,
    deadlineDate,
    handleSubmit,
    resetFormFields,
  } = useTodos();

  const saveButtonClasses = classNames('add-todo-form__btn save-btn', {
    disabled: !(titleInputText)
      || !(descriptionInputText)
      || !(deadlineDate),
  });

  const formKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const resetButtonClasses = classNames('add-todo-form__btn reset-btn', {
    disabled: !(titleInputText) && !(descriptionInputText),
  });

  return (
    <div className="app__add-todo-block add-todo-block">
      <form
        onSubmit={handleSubmit}
        className="add-todo-block__add-todo-form add-todo-form"
        onKeyDown={formKeyDown}
        role="presentation"
      >
        <CompleteInput />
        <div className="add-todo-form__main-menu">
          <TitleInput />
          <DeadlineInput />
          <DescriptionInput />
          <Checklist />

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
      </form>
    </div>
  );
};
