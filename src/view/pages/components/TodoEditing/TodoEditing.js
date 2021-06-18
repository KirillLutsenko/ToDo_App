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
import './TodoEditing.scss';
import { todaysDate } from '../../../../helpers';

export const TodoEditing = () => {
  const {
    warnings,
    todoInfo,
    changeSelectedTodoInfo,
    deleteTodo,
    changeTodoTag,
    resetTodoFormFields,
  } = useTodos();

  const formKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const saveButtonClasses = classNames('add-todo-form__btn save-btn', {
    disabled: (todoInfo.title.length > 0 && todoInfo.title.length <= 3)
      || !todoInfo.todoTag
      || todoInfo.subtaskList.length < 2,
  });

  const resetButtonClasses = classNames('add-todo-form__btn reset-btn', {
    disabled: todoInfo.title.length < 3
      && !(todoInfo.description)
      && todoInfo.deadline === todaysDate
      && todoInfo.subtaskList.length > 1,
  });

  return (
    <div className="app__add-todo-block add-todo-block">
      <form
        onSubmit={changeSelectedTodoInfo}
        onClick={event => event.stopPropagation()}
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

          <div className="add-todo-form__direction-buttons">
            <button
              type="button"
              className="add-todo-form__btn sketch-button"
              onClick={() => changeTodoTag('Sketch')}
            >
              Sketch
            </button>
            <button
              type="button"
              className="add-todo-form__btn spotify-button"
              onClick={() => changeTodoTag('Spotify')}
            >
              Spotify
            </button>
            <button
              type="button"
              className="add-todo-form__btn dribble-button"
              onClick={() => changeTodoTag('Dribble')}
            >
              Dribble
            </button>
            <button
              type="button"
              className="add-todo-form__btn behance-button"
              onClick={() => changeTodoTag('Behance')}
            >
              Behance
            </button>
            <button
              type="button"
              className="add-todo-form__btn ux-button"
              onClick={() => changeTodoTag('UX')}
            >
              UX
            </button>
          </div>

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
            <button
              type="button"
              className="add-todo-form__btn delete-todo-btn"
              onClick={deleteTodo}
            >
              Delete Task
            </button>
          </div>

          <div className="add-todo-form__warning-error-block">
            {warnings.titleWarning && (
              <span className="add-todo-form__warning-error warning-error">
                Task title is too short
              </span>
            )}

            {todoInfo.deadline === '' && (
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
