// Core
import React from 'react';

// Tools
import { useTodos } from '../../../../../bus/todos/index';

export const Tagblock = () => {
  const {
    warnings,
    changeTodoTag,
  } = useTodos();

  return (
    <div className="add-todo-form__direction-buttons-block">
      <div className="add-todo-form__direction-buttons">
        <button
          type="button"
          className="add-todo-form__btn sketch-button"
          onClick={() => changeTodoTag('Sketch')}
        >
          Sketch
        </button>
        <button
          type="button"
          className="add-todo-form__btn spotify-button"
          onClick={() => changeTodoTag('Spotify')}
        >
          Spotify
        </button>
        <button
          type="button"
          className="add-todo-form__btn dribble-button"
          onClick={() => changeTodoTag('Dribble')}
        >
          Dribble
        </button>
        <button
          type="button"
          className="add-todo-form__btn behance-button"
          onClick={() => changeTodoTag('Behance')}
        >
          Behance
        </button>
        <button
          type="button"
          className="add-todo-form__btn ux-button"
          onClick={() => changeTodoTag('UX')}
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
