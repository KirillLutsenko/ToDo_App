// Core
import React from 'react';
import PropTypes from 'prop-types';

// Tools
import { useTodos } from '../../../../bus/todos/index';

// Styles
import './Todo.scss';

export const Todo = ({
  id,
  title,
  description,
  deadline,
  completed,
}, index) => {
  const { showTodoInfo } = useTodos();

  return (
    <li
      className="todo-list__todo todo"
      onClick={event => showTodoInfo(event, id)}
      role="presentation"
    >
      <div className="todo__todo-information">
        <div className="todo__todo-status-block">
          <label
            htmlFor={`${index}`}
            className="todo_todo-label"
          >
            <input
              type="checkbox"
              id={`${index}`}
              checked={completed}
            />
          </label>
        </div>
        <div className="todo__todo-tittle-block">
          <h3 className="todo__todo-title">{title}</h3>
          <span className="todo__todo-description">
            {description}
          </span>
        </div>
        <span className="todo__todo-deadline-date">{deadline}</span>
      </div>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deadline: PropTypes.string.isRequired,
};
