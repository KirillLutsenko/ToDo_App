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
  // ChangeTodoInfo Types
  GET_TODO_INFO,
  SHOW_TODO_INFO,
  SET_COMPLETE_STATUS_FOR_SELECTED_TODO,
  CHANGE_TITLE_FOR_SELECTED_TODO,
  CHANGE_DEADLINE_FOR_SELECTED_TODO,
  CHANGE_DESCRIPTION_FOR_SELECTED_TODO,
  SET_SELECTED_TODO_ID,
  CHANGE_TODO_INFO,
  CHANGE_TODO_SUBTASK_LIST,
  CHANGE_TODO_SUBTASK_INPUT_TEXT,
  // CHANGE_TODO_SELECTED_SUBTASK_TEXT,
  // CHANGE_TODO_SELECTED_SUBTASK_COMPLETE_STATUS,
  SET_TODO_SUBTASK_COMPLETE_STATUS,
  // Global Types
  SET_INITIAL_STATE,
} from './types';

export const initialState = {
  // TodoList State
  todoList: [],
  // AddTodoForm State
  visibleNewTaskForm: false,
  completeStatus: false,
  titleInputText: '',
  descriptionInputText: '',
  deadlineDate: '',
  subtasks: {
    subtaskList: [{
      id: 1,
      title: '',
      complete: false,
    }],
    subtaskInputText: '',
    subtaskCompleteStatus: false,
    selectedSubtaskText: '',
    selectedSubtaskCompleteStatus: false,
  },
  // ChangeTodoInfo State
  selectedTodoId: 0,
  todoInfo: {
    id: 0,
    title: '',
    description: '',
    deadline: '',
    subtaskList: [],
    subtaskText: '',
    completed: false,
    subtaskInputText: '',
    subtaskCompleteStatus: false,
    selectedSubtaskText: '',
    selectedSubtaskCompleteStatus: false,
  },
  visibilityTodoInfo: false,
};

export const todoReducer = (state = initialState, action) => {
  const { todoInfo, subtasks } = state;

  switch (action.type) {
    // TodoList Cases
    case TODOS_FILL:
      return {
        ...state,
        todoList: action.payload,
      };
    // AddTodoForm Cases
    case SHOW_NEW_TASK_FORM:
      return {
        ...state,
        visibleNewTaskForm: action.payload,
      };

    case CHOOSE_COMPLETE_STATUS:
      return {
        ...state,
        completeStatus: action.payload,
      };

    case CHANGE_TITLE_INPUT_TEXT:
      return {
        ...state,
        titleInputText: action.payload,
      };

    case CHANGE_DESCRIPTION_INPUT_TEXT:
      return {
        ...state,
        descriptionInputText: action.payload,
      };

    case GET_DEADLINE_DATE:
      return {
        ...state,
        deadlineDate: action.payload,
      };

    case CHANGE_SUBTASK_INPUT_TEXT:
      return {
        ...state,
        subtasks: {
          ...subtasks,
          subtaskInputText: action.payload,
        },
      };

    case SET_SUBTASK_COMPLETE_STATUS:
      return {
        ...state,
        subtasks: {
          ...subtasks,
          subtaskCompleteStatus: action.payload,
        },
      };

    case CHANGE_SELECTED_SUBTASK_TEXT:
      return {
        ...state,
        subtasks: {
          ...subtasks,
          selectedSubtaskText: action.payload,
        },
      };

    case CHANGE_SELECTED_SUBTASK_COMPLETE_STATUS:
      return {
        ...state,
        subtasks: {
          ...subtasks,
          selectedSubtaskCompleteStatus: action.payload,
        },
      };

    case CHANGE_SUBTASK_LIST:
      return {
        ...state,
        subtasks: {
          ...subtasks,
          subtaskList: action.payload,
        },
      };

    case CHANGE_TODO_INFO:
      return {
        ...state,
        todoList: action.payload,
      };

    // ChangeTodoInfo Cases
    case SET_SELECTED_TODO_ID:
      return {
        ...state,
        selectedTodoId: action.payload,
      };

    case GET_TODO_INFO:
      return {
        ...state,
        todoInfo: action.payload,
      };

    case SHOW_TODO_INFO:
      return {
        ...state,
        visibilityTodoInfo: action.payload,
      };

    case SET_COMPLETE_STATUS_FOR_SELECTED_TODO:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          completed: action.payload,
        },
      };

    case CHANGE_TITLE_FOR_SELECTED_TODO:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          title: action.payload,
        },
      };

    case CHANGE_DEADLINE_FOR_SELECTED_TODO:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          deadline: action.payload,
        },
      };

    case CHANGE_DESCRIPTION_FOR_SELECTED_TODO:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          description: action.payload,
        },
      };

    case CHANGE_TODO_SUBTASK_LIST:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          subtaskList: action.payload,
        },
      };

    case CHANGE_TODO_SUBTASK_INPUT_TEXT:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          subtaskInputText: action.payload,
        },
      };

    case SET_TODO_SUBTASK_COMPLETE_STATUS:
      return {
        ...state,
        todoInfo: {
          ...todoInfo,
          subtaskCompleteStatus: action.payload,
        },
      };

    // Global Cases
    case SET_INITIAL_STATE:
      return initialState;

    case RESET_FORM:
      return {
        ...state,
        completeStatus: false,
        titleInputText: '',
        descriptionInputText: '',
        deadlineDate: '',
        subtasks: {
          subtaskList: [{
            id: 1,
            title: '',
            complete: false,
          }],
          subtaskInputText: '',
          subtaskCompleteStatus: false,
        },
      };

    default:
      return state;
  }
};
