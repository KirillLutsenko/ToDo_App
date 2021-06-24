const moment = require('moment');

// reducer, DeadlineInput, SubmitButton, TodoEditing
export const todaysDate = moment().format('YYYY-MM-DD');

// AddTodoForm
export const formKeyDown = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
};
