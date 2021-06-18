import {
  // TodoList Types
  TODOS_FILL,
  // AddTodoForm Types
  SHOW_NEW_TASK_FORM,
  CHOOSE_COMPLETE_STATUS,
  CHANGE_TITLE_INPUT_TEXT,
  CHANGE_DESCRIPTION_INPUT_TEXT,
  GET_DEADLINE_DATE,
  RESET_FORM,
  CHANGE_SUBTASK_INPUT_TEXT,
  SET_SUBTASK_COMPLETE_STATUS,
  CHANGE_SUBTASK_LIST,
  CHANGE_SELECTED_SUBTASK_TEXT,
  CHANGE_SELECTED_SUBTASK_COMPLETE_STATUS,
  SET_TAG,
  // ChangeTodoInfo Types
  GET_TODO_INFO,
  SHOW_TODO_INFO,
  SET_COMPLETE_STATUS_FOR_SELECTED_TODO,
  CHANGE_TITLE_FOR_SELECTED_TODO,
  CHANGE_DEADLINE_FOR_SELECTED_TODO,
  CHANGE_DESCRIPTION_FOR_SELECTED_TODO,
  CHANGE_TODO_INFO,
  CHANGE_TODO_SUBTASK_LIST,
  CHANGE_TODO_SUBTASK_INPUT_TEXT,
  CHANGE_TODO_SELECTED_SUBTASK_TEXT,
  CHANGE_TODO_SELECTED_SUBTASK_COMPLETE_STATUS,
  SET_TODO_SUBTASK_COMPLETE_STATUS,
  CHANGE_TODO_TAG,
  RESET_EDITING_SELECTED_TODO_FORM,
  // Global Types
  SET_INITIAL_STATE,
  SET_TITLE_WARNING,
  SET_TAG_FIELD_WARNING,
  SET_SUBTASKS_WARNING,
  SET_DEADLINE_WARNING,
} from './types';

export const todoActions = Object.freeze({
  // TodoList Actions
  todosFillAction: payload => ({
    type: TODOS_FILL,
    payload,
  }),

  // AddTodoForm Actions
  setVisibleNewTaskFormAction: payload => ({
    type: SHOW_NEW_TASK_FORM,
    payload,
  }),

  setCompleteStatusAction: payload => ({
    type: CHOOSE_COMPLETE_STATUS,
    payload,
  }),

  changeTitleInputTextAction: payload => ({
    type: CHANGE_TITLE_INPUT_TEXT,
    payload,
  }),

  changeDescriptionInputTextAction: payload => ({
    type: CHANGE_DESCRIPTION_INPUT_TEXT,
    payload,
  }),

  getDeadlineDateAction: payload => ({
    type: GET_DEADLINE_DATE,
    payload,
  }),

  changeSubtaskInputTextAction: payload => ({
    type: CHANGE_SUBTASK_INPUT_TEXT,
    payload,
  }),

  setSubtaskCompleteStatusAction: payload => ({
    type: SET_SUBTASK_COMPLETE_STATUS,
    payload,
  }),

  changeSelectedSubtaskTextAction: payload => ({
    type: CHANGE_SELECTED_SUBTASK_TEXT,
    payload,
  }),

  changeSelectedSubtaskCompleteStatus: payload => ({
    type: CHANGE_SELECTED_SUBTASK_COMPLETE_STATUS,
    payload,
  }),

  changeSubtaskListAction: payload => ({
    type: CHANGE_SUBTASK_LIST,
    payload,
  }),

  setTagAction: payload => ({
    type: SET_TAG,
    payload,
  }),

  resetFormAction: payload => ({
    type: RESET_FORM,
    payload,
  }),

  // ChangeTodoInfo Actions

  getTodoInfoAction: payload => ({
    type: GET_TODO_INFO,
    payload,
  }),

  changeVisibilityTodoInfoAction: payload => ({
    type: SHOW_TODO_INFO,
    payload,
  }),

  changeCompleteStatusForSelectedTodoAction: payload => ({
    type: SET_COMPLETE_STATUS_FOR_SELECTED_TODO,
    payload,
  }),

  changeTitleForSelectedTodoAction: payload => ({
    type: CHANGE_TITLE_FOR_SELECTED_TODO,
    payload,
  }),

  changeDeadlineForSelectedTodo: payload => ({
    type: CHANGE_DEADLINE_FOR_SELECTED_TODO,
    payload,
  }),

  changeDescriptionForSelectedTodo: payload => ({
    type: CHANGE_DESCRIPTION_FOR_SELECTED_TODO,
    payload,
  }),

  changeTodoInfo: payload => ({
    type: CHANGE_TODO_INFO,
    payload,
  }),

  changeTodoSubtaskInputTextAction: payload => ({
    type: CHANGE_TODO_SUBTASK_INPUT_TEXT,
    payload,
  }),

  changeTodoSelectedSubtaskTextAction: payload => ({
    type: CHANGE_TODO_SELECTED_SUBTASK_TEXT,
    payload,
  }),

  changeTodoSelectedSubtaskCompleteStatus: payload => ({
    type: CHANGE_TODO_SELECTED_SUBTASK_COMPLETE_STATUS,
    payload,
  }),

  setTodoSubtaskCompleteStatusAction: payload => ({
    type: SET_TODO_SUBTASK_COMPLETE_STATUS,
    payload,
  }),

  changeTodoSubtaskListAction: payload => ({
    type: CHANGE_TODO_SUBTASK_LIST,
    payload,
  }),

  changeTodoTagAction: payload => ({
    type: CHANGE_TODO_TAG,
    payload,
  }),

  resetEditingSelectedTodoFormAction: payload => ({
    type: RESET_EDITING_SELECTED_TODO_FORM,
    payload,
  }),

  // Global Actions
  setInitialStateAction: payload => ({
    type: SET_INITIAL_STATE,
    payload,
  }),

  setTitleWarningAction: payload => ({
    type: SET_TITLE_WARNING,
    payload,
  }),

  setTagFieldwarningAction: payload => ({
    type: SET_TAG_FIELD_WARNING,
    payload,
  }),

  setSaubtasksWarningAction: payload => ({
    type: SET_SUBTASKS_WARNING,
    payload,
  }),

  setDeadlineWarningAction: payload => ({
    type: SET_DEADLINE_WARNING,
    payload,
  }),
});
