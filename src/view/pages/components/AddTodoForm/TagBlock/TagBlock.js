// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

// Styles
import './TagBlock.scss';

export const TagBlock = () => {
  const { warnings, setTag } = useTodos();

  return (
    <div className="add-todo-form__direction-buttons-block">
      <div className="add-todo-form__direction-buttons">
        <button
          type="button"
          className="add-todo-form__btn sketch-button"
          onClick={() => setTag('Sketch')}
        >
          Sketch
        </button>
        <button
          type="button"
          className="add-todo-form__btn spotify-button"
          onClick={() => setTag('Spotify')}
        >
          Spotify
        </button>
        <button
          type="button"
          className="add-todo-form__btn dribble-button"
          onClick={() => setTag('Dribble')}
        >
          Dribble
        </button>
        <button
          type="button"
          className="add-todo-form__btn behance-button"
          onClick={() => setTag('Behance')}
        >
          Behance
        </button>
        <button
          type="button"
          className="add-todo-form__btn ux-button"
          onClick={() => setTag('UX')}
        >
          UX
        </button>
      </div>
      {warnings.tagFieldWarning && (
        <span
          className="add-todo-form__warning-error warning-error tag-error"
        >
          Task tag field is required
        </span>
      )}
    </div>
  );
};
