// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './Checklist.scss';

export const Checklist = () => {
  const {
    todoInfo,
    warnings,
    changeTodoSelectedSubstaskCompleteStatus,
    changeTodoSelectedSubtaskText,
    addTodoSubtask,
  } = useTodos();

  const { subtaskList } = todoInfo;

  const newSubtaskKeyDown = (event, index) => {
    const { keyCode } = event;

    if (((keyCode >= 48 && keyCode <= 57)
      || (keyCode >= 65 && keyCode <= 90)
      || (keyCode >= 186 && keyCode <= 192)
      || (keyCode >= 219 && keyCode <= 222))
      && (index + 1) === subtaskList.length) {
      addTodoSubtask();
    }
  };

  return (
    <div>
      <span className="add-todo-form__subtasks-block-title">
        Checklist
      </span>

      {subtaskList.map((subtask, index) => (
        <div
          className="add-todo-form__subtasks-block"
          key={subtask.id}
        >
          <div className="add-todo-form__checkboxes-block">
            <input
              type="checkbox"
              name="subtask-checkbox"
              className="add-todo-form__complete-checkbox"
              checked={subtask.complete}
              onChange={
                () => changeTodoSelectedSubstaskCompleteStatus(subtask.id)
              }
            />
            <input
              type="text"
              placeholder="Add more"
              name="subtask-value"
              className="add-todo-form__subtask-input"
              value={subtask.title}
              onChange={
                event => changeTodoSelectedSubtaskText(event, subtask.id)
              }
              onKeyDown={event => newSubtaskKeyDown(event, index)}
            />
          </div>
        </div>
      ))}

      {warnings.subtasksWarning && (
        <span className="add-todo-form__warning-error warning-error">
          Task doesn&apos;t contain any sub-tasks
        </span>
      )}
    </div>
  );
};
