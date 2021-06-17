// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../bus/todos/index';

// Components
import { TodoList } from '../TodoList';
import { AddTodoForm } from '../AddTodoForm';
import { TodoEditing } from '../TodoEditing';

// Styles
import './TodoAppBody.scss';

export const TodoAppBody = () => {
  const {
    todoList,
    visibleNewTaskForm,
    visibilityTodoInfo,
  } = useTodos();

  if (!visibleNewTaskForm && !todoList.length) {
    return (
      <div className="app__todo-body todo-body todo-body-start-page">
        <div className="todo-body__start-page start-page">
          <div className="start-page__image" />
          <h3>No task found?</h3>
          <span className="start-page__text">
            Try to assign more tasks to your
            employees or create a new project from scratch
          </span>
        </div>
      </div>
    );
  }

  if (visibleNewTaskForm && !todoList.length) {
    return (
      <div className="app__todo-body todo-body todo-body-only-form">
        <AddTodoForm />
      </div>
    );
  }

  if (visibleNewTaskForm && todoList.length) {
    return (
      <div className="app__todo-body todo-body todo-body-full">
        <TodoList todoList={todoList} />
        <AddTodoForm />
      </div>
    );
  }

  if (visibilityTodoInfo && todoList.length) {
    return (
      <div className="app__todo-body todo-body todo-body-full">
        <TodoList todoList={todoList} />
        <TodoEditing />
      </div>
    );
  }

  if (!visibleNewTaskForm && todoList.length) {
    return (
      <div className="app__todo-body todo-body todo-body-only-todos">
        <TodoList todoList={todoList} />
      </div>
    );
  }

  return (
    <span>Total Error</span>
  );
};
