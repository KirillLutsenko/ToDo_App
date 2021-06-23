// reducer, DeadlineInput, SubmitButton, TodoEditing
const moment = require('moment');

export const todaysDate = moment().format('YYYY-MM-DD');

// AddTodoForm
export const formKeyDown = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
};
