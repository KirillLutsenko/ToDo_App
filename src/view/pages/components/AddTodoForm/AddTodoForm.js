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
    subtasks,
    warnings,
    tag,
    handleSubmit,
    resetFormFields,
    setTag,
  } = useTodos();

  const { subtaskList } = subtasks;

  const formKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const saveButtonClasses = classNames('add-todo-form__btn save-btn', {
    disabled: (titleInputText > 0 && titleInputText <= 3)
      || !tag
      || subtaskList.length < 2,
  });

  const resetButtonClasses = classNames('add-todo-form__btn reset-btn', {
    disabled: !(titleInputText) && !(descriptionInputText),
  });

  return (
    <div className="app__add-todo-block add-todo-block">
      <form
        onSubmit={handleSubmit}
        className="add-todo-block__add-todo-form add-todo-form"
        onKeyDown={formKeyDown}
        onClick={event => event.stopPropagation()}
        role="presentation"
      >
        <CompleteInput />
        <div className="add-todo-form__main-menu">
          <TitleInput />
          <DeadlineInput />
          <DescriptionInput />
          <Checklist />

          <div className="add-todo-form__direction-buttons">
            <button
              type="button"
              className="add-todo-form__btn sketch-button"
              onClick={() => setTag('Sketch')}
            >
              Sketch
            </button>
            <button
              type="button"
              className="add-todo-form__btn spotify-button"
              onClick={() => setTag('Spotify')}
            >
              Spotify
            </button>
            <button
              type="button"
              className="add-todo-form__btn dribble-button"
              onClick={() => setTag('Dribble')}
            >
              Dribble
            </button>
            <button
              type="button"
              className="add-todo-form__btn behance-button"
              onClick={() => setTag('Behance')}
            >
              Behance
            </button>
            <button
              type="button"
              className="add-todo-form__btn ux-button"
              onClick={() => setTag('UX')}
            >
              UX
            </button>
          </div>

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

          <div className="add-todo-form__warning-error-block">
            {warnings.titleWarning && (
              <span className="add-todo-form__warning-error warning-error">
                Task title is too short
              </span>
            )}

            {deadlineDate === '' && (
              <span className="add-todo-form__warning-error warning-error">
                Deadline is required
              </span>
            )}

            {warnings.tagFieldWarning && (
              <span className="add-todo-form__warning-error warning-error">
                Task tag field is required
              </span>
            )}

            {warnings.subtasksWarning && (
              <span className="add-todo-form__warning-error warning-error">
                Task doesn&apos;t contain any sub-tasks
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
