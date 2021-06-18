// Core
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import { TodoShape } from '../../../shapes/TodoShape';
import { Todo } from '../Todo';
import { useTodos } from '../../../../bus/todos';

// Styles
import './TodoList.scss';

export const TodoList = ({ todoList }) => {
  const {
    visibilityTodoInfo,
    visibleNewTaskForm,
  } = useTodos();

  const todoListClasses = classNames('todo-body__todo-list todo-list', {
    'todo-body__todo-list long-todo-list': !visibilityTodoInfo
      || !visibleNewTaskForm,
  });

  return (
    <ul className={todoListClasses}>
      {
        todoList.map((todo, index) => (
          <Todo
            key={todo.id}
            {...todo}
            index={index}
          />
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape(TodoShape)).isRequired,
};
