// Core
import React from 'react';
import { useTodos } from '../../bus/todos';

// Styles
import './App.scss';

// Components
import { NewTaskButton } from './components/NewTaskButton';
import { TodoAppBody } from './components/TodoAppBody';

export const App = () => {
  const {
    closeForms,
  } = useTodos();

  return (
    <div
      className="app"
      onClick={closeForms}
      role="presentation"
    >
      <NewTaskButton />
      <TodoAppBody />
    </div>
  );
};
