// Core
import React from 'react';

// Components
import { TitleInput } from './TitleInput';
import { DescriptionInput } from './DescriptionInput';
import { DeadlineInput } from './DeadlineInput';
import { CompleteInput } from './CompleteInput';
import { Checklist } from './Checklist';
import { TagBlock } from './TagBlock/TagBlock';
import { SubmitButtons } from './SubmitButtons/SubmitButtons';

// Tools
import { useTodos } from '../../../../bus/todos/index';
import { formKeyDown } from '../../../../helpers';

// Styles
import './AddTodoForm.scss';

export const AddTodoForm = () => {
  const { addTododFormSubmit } = useTodos();

  return (
    <div className="app__add-todo-block add-todo-block">
      <form
        onSubmit={addTododFormSubmit}
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
          <TagBlock />
          <SubmitButtons />
        </div>
      </form>
    </div>
  );
};
