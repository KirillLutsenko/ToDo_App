// Core
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TodoShape } from '../../../shapes/TodoShape';
import { Todo } from '../Todo';

// Styles
import './TodoList.scss';

export const TodoList = ({ todoList }) => (
  <ul className="todo-body__todo-list todo-list">
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

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape(TodoShape)).isRequired,
};
