// Core
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Tools
import { useTodos } from '../../../../bus/todos/index';

// Styles
import './Todo.scss';

const moment = require('moment');

export const Todo = ({
  id,
  title,
  deadline,
  completed,
  todoTag,
}, index) => {
  const { showTodoInfo, setExternalCompleteStatus } = useTodos();

  const transformedDate = moment(deadline).format('DD MMM YYYY');

  const tagClasses = classNames('todo__tag', {
    'todo__tag sketch-button': todoTag === 'Sketch',
    'todo__tag spotify-button': todoTag === 'Spotify',
    'todo__tag dribble-button': todoTag === 'Dribble',
    'todo__tag behance-button': todoTag === 'Behance',
    'todo__tag ux-button': todoTag === 'UX',
  });

  return (
    <li
      className="todo-list__todo todo"
      onClick={event => showTodoInfo(event, id)}
      role="presentation"
    >
      <div className="todo__todo-information">
        <div className="todo__status-title-block">
          <div className="todo__todo-status-block">
            <label
              htmlFor={`${index}`}
              className="todo_todo-label"
            >
              <input
                type="checkbox"
                className="todo__complete-checkbox"
                id={`${index}`}
                checked={completed}
                onChange={() => setExternalCompleteStatus(id)}
              />
            </label>
          </div>
          <div className="todo__todo-tittle-block">
            <h3 className="todo__todo-title">{title}</h3>
          </div>
        </div>

        <div className="todo__date-tag-block">
          <span
            className="todo__todo-deadline-date todo-deadline-date"
          >
            {transformedDate}
          </span>
          <div className={tagClasses}>
            {todoTag}
          </div>
        </div>
      </div>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  todoTag: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deadline: PropTypes.string.isRequired,
};
