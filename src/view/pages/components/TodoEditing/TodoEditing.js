// Core
import React from 'react';

// Components
import { TitleInput } from './TitleInput';
import { DescriptionInput } from './DescriptionInput';
import { DeadlineInput } from './DeadlineInput';
import { CompleteInput } from './CompleteInput';
import { Checklist } from './Checklist';
import { Tagblock } from './TagBlock/Tagblock';
import { SubmitButtons } from './SubmitButtons';

// Tools
import { useTodos } from '../../../../bus/todos/index';
import { formKeyDown } from '../../../../helpers';

// Styles
import './TodoEditing.scss';

export const TodoEditing = () => {
  const { changeSelectedTodoInfo, deleteTodo } = useTodos();

  return (
    <div className="app__add-todo-block add-todo-block">
      <form
        onSubmit={changeSelectedTodoInfo}
        onClick={event => event.stopPropagation()}
        className="add-todo-block__add-todo-form add-todo-form"
        onKeyDown={formKeyDown}
        role="presentation"
      >
        <div className="add-todo-block__complete-delete-block">
          <CompleteInput />
          <button
            type="button"
            className="add-todo-form__delete-todo-btn"
            onClick={deleteTodo}
          >
            X
          </button>
        </div>
        <div className="add-todo-form__main-menu">
          <TitleInput />
          <DeadlineInput />
          <DescriptionInput />
          <Checklist />
          <Tagblock />
          <SubmitButtons />
        </div>
      </form>
    </div>
  );
};
