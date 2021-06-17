// Core
import React from 'react';

// Styles
import './App.scss';

// Components
import { NewTaskButton } from './components/NewTaskButton';
import { TodoAppBody } from './components/TodoAppBody';

export const App = () => (
  <div className="app">
    <NewTaskButton />
    <TodoAppBody />
  </div>
);
