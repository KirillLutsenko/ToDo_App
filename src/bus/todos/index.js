// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { todoActions } from './actions';
import { initialState } from './reducer';

// types & reducers
export * from './types';
export * from './reducer';

export const useTodos = () => {
  const {
    visibleNewTaskForm,
    todoList,
    completeStatus,
    titleInputText,
    descriptionInputText,
    deadlineDate,
    subtasks,
    todoInfo,
    visibilityTodoInfo,
  } = useSelector(state => state.todo);

  const {
    subtaskList,
    subtaskInputText,
    subtaskCompleteStatus,
    // selectedSubtaskCompleteStatus,
  } = subtasks;

  const dispatch = useDispatch();

  const setVisibleNewTaskForm = () => {
    dispatch(todoActions.setVisibleNewTaskFormAction(true));
    dispatch(todoActions.changeVisibilityTodoInfoAction(false));
  };

  const setCompleteStatus = () => {
    dispatch(todoActions.setCompleteStatusAction(!completeStatus));
  };

  const changeDeadlineDate = (event) => {
    const { value } = event.target;

    dispatch(todoActions.getDeadlineDateAction(value));
  };

  const createTodo = () => ({
    id: todoList.length + 1,
    title: titleInputText,
    description: descriptionInputText,
    deadline: deadlineDate,
    completed: completeStatus,
    subtaskList,
  });

  const addTodo = async(newTodo) => {
    const newTodoList = await [...todoList, newTodo];

    dispatch(todoActions.todosFillAction(newTodoList));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.keyCode === 'Enter') {
      event.preventDefault();
    }

    addTodo(createTodo());
    dispatch(todoActions.setInitialStateAction());
    dispatch(todoActions.setVisibleNewTaskFormAction(false));
  };

  const changeTitleInputText = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeTitleInputTextAction(value));
  };

  const changeDescriptionInputText = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeDescriptionInputTextAction(value));
  };

  const newSubtask = () => ({
    id: subtaskList.length + 1,
    title: subtaskInputText,
    complete: subtaskCompleteStatus,
  });

  const changeSubtaskInputText = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeSubtaskInputTextAction(value));
  };

  const setSubtaskCopmpleteStatus = () => {
    dispatch(todoActions
      .setSubtaskCompleteStatusAction(!subtaskCompleteStatus));
  };

  const changeSubtaskList = (newSubtaskList) => {
    dispatch(todoActions.changeSubtaskListAction(newSubtaskList));
  };

  const changeSelectedSubtaskText = (event, id) => {
    const { value } = event.target;
    const selectedSubtask = subtaskList.find(subtask => subtask.id === id);

    let newSubtaskList = [];

    newSubtaskList = subtaskList
      .map(subtask => ((selectedSubtask.id === subtask.id)
        ? {
          ...subtask,
          title: value,
        } : { ...subtask }));

    if (subtaskList.length === 1) {
      changeSubtaskList([...initialState.subtasks.subtaskList]);

      // eslint-disable-next-line no-console
      console.log(subtaskList, newSubtaskList, subtaskList.length);
    }

    if (!value.length && subtaskList.length > 1) {
      newSubtaskList = subtaskList.filter(subtask => subtask.id !== id);
    }

    changeSubtaskList(newSubtaskList);
  };

  const changeSelectedSubstaskCompleteStatus = (id) => {
    const selectedSubtask = subtaskList.find(subtask => subtask.id === id);

    const newSubtaskList = subtaskList
      .map(subtask => ((selectedSubtask.id === subtask.id)
        ? {
          ...subtask,
          complete: !subtask.complete,
        } : { ...subtask }));

    changeSubtaskList(newSubtaskList);
  };

  const addSubtask = async() => {
    const newSubtaskList = await [...subtaskList, newSubtask()];

    dispatch(todoActions.addSubtaskAction(newSubtaskList));
    dispatch(todoActions.changeSubtaskInputTextAction(''));
    dispatch(todoActions
      .setSubtaskCompleteStatusAction(false));
  };

  const showTodoInfo = async(event, id) => {
    event.stopPropagation();

    const selectedTodoInfo = todoList.find(todo => todo.id === id);

    dispatch(todoActions.getTodoInfoAction(selectedTodoInfo));
    dispatch(todoActions.changeVisibilityTodoInfoAction(!visibilityTodoInfo));
  };

  const setSelectedTodoCompleteStatus = () => {
    const { completed } = todoInfo;

    dispatch(todoActions.changeCompleteStatusForSelectedTodoAction(!completed));
  };

  const changeTitleForSelectedTodo = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeTitleForSelectedTodoAction(value));
  };

  const changeDeadlineDateForSelectedTodo = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeDeadlineForSelectedTodo(value));
  };

  const changeDescriptionForSelectedTodo = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeDescriptionForSelectedTodo(value));
  };

  const resetFormFields = () => {
    dispatch(todoActions.resetFormAction());
  };

  return {
    visibleNewTaskForm,
    todoList,
    titleInputText,
    descriptionInputText,
    deadlineDate,
    completeStatus,
    subtasks,
    todoInfo,
    visibilityTodoInfo,
    handleSubmit,
    setCompleteStatus,
    changeTitleInputText,
    changeDescriptionInputText,
    changeDeadlineDate,
    resetFormFields,
    changeSubtaskInputText,
    setSubtaskCopmpleteStatus,
    addSubtask,
    changeSelectedSubtaskText,
    changeSelectedSubstaskCompleteStatus,
    setVisibleNewTaskForm,
    showTodoInfo,
    setSelectedTodoCompleteStatus,
    changeTitleForSelectedTodo,
    changeDeadlineDateForSelectedTodo,
    changeDescriptionForSelectedTodo,
  };
};
