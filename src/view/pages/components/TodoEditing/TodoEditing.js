// Core
import React from 'react';

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

export const TodoEditing = () => {
  const {
    todoInfo,
    handleSubmit,
  } = useTodos();

  // eslint-disable-next-line no-console
  console.log(todoInfo);

  const formKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div className="app__add-todo-block add-todo-block">
      <form
        onSubmit={handleSubmit}
        className="add-todo-block__add-todo-form add-todo-form"
        onKeyDown={formKeyDown}
        role="presentation"
      >
        <CompleteInput />
        <button
          type="button"
        >
          X
        </button>
        <div className="add-todo-form__main-menu">
          <TitleInput />
          <DeadlineInput />
          <DescriptionInput />
          <Checklist />

          <button
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
