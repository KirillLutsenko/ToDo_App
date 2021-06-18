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
    warnings,
    subtasks,
    todoInfo,
    visibilityTodoInfo,
    tag,
  } = useSelector(state => state.todo);

  const {
    subtaskList,
    subtaskInputText,
    subtaskCompleteStatus,
    // selectedSubtaskCompleteStatus,
  } = subtasks;

  const dispatch = useDispatch();

  const closeForms = (event) => {
    dispatch(todoActions.resetFormAction());
    dispatch(todoActions.setVisibleNewTaskFormAction(false));
  };

  const setVisibleNewTaskForm = (event) => {
    event.stopPropagation();

    if (!visibleNewTaskForm) {
      resetWarningErrors();
    }

    dispatch(todoActions.setVisibleNewTaskFormAction(true));
    dispatch(todoActions.changeVisibilityTodoInfoAction(false));
  };

  const setCompleteStatus = () => {
    dispatch(todoActions.setCompleteStatusAction(!completeStatus));
  };

  const createTodo = () => ({
    id: todoList.length + 1,
    title: titleInputText,
    description: descriptionInputText,
    deadline: deadlineDate,
    completed: completeStatus,
    subtaskList,
    todoTag: tag,
  });

  const addTodo = async(newTodo) => {
    const newTodoList = await [...todoList, newTodo];

    dispatch(todoActions.todosFillAction(newTodoList));
  };

  const deleteTodo = () => {
    const newTodoList = todoList.filter(todo => todo.id !== todoInfo.id);

    dispatch(todoActions.todosFillAction(newTodoList));
    dispatch(todoActions.changeVisibilityTodoInfoAction(false));

    if (!(newTodoList.length)) {
      dispatch(todoActions.setInitialStateAction());
    }
  };

  const setExternalCompleteStatus = (id) => {
    const newTodoList = todoList.map(todo => ((todo.id === id)
      ? {
        ...todo,
        completed: !todo.completed,
      }
      : todo
    ));

    dispatch(todoActions.todosFillAction(newTodoList));
  };

  const changeTagErrorStatus = (value) => {
    dispatch(todoActions.setTagFieldwarningAction(value));
  };

  const setTag = (_tag) => {
    dispatch(todoActions.setTagAction(_tag));

    if (_tag.length) {
      changeTagErrorStatus(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.keyCode === 'Enter') {
      event.preventDefault();
    }

    if (titleInputText.length < 3) {
      dispatch(todoActions.setTitleWarningAction(true));
    }

    if (subtaskList.length < 2) {
      dispatch(todoActions.setSaubtasksWarningAction(true));
    }

    if (!tag) {
      dispatch(todoActions.setTagFieldwarningAction(true));
    }

    if (titleInputText.length >= 3
      && tag
      && subtaskList.length > 1
    ) {
      addTodo(createTodo());
      dispatch(todoActions.setInitialStateAction());
      dispatch(todoActions.setVisibleNewTaskFormAction(false));
    }
  };

  const changeSelectedTodoInfo = async(event) => {
    event.preventDefault();

    const { title, todoTag } = todoInfo;

    if (event.keyCode === 'Enter') {
      event.preventDefault();
    }

    const newTodoList = await todoList.map(todo => ((todo.id === todoInfo.id)
      ? {
        id: todoInfo.id,
        title: todoInfo.title,
        description: todoInfo.description,
        deadline: todoInfo.deadline,
        completed: todoInfo.completed,
        subtaskList: todoInfo.subtaskList,
        todoTag: todoInfo.todoTag,
      }
      : todo
    ));

    if (title.length < 3) {
      dispatch(todoActions.setTitleWarningAction(true));
    }

    if (todoInfo.subtaskList.length < 2) {
      dispatch(todoActions.setSaubtasksWarningAction(true));
    }

    if (!todoTag) {
      dispatch(todoActions.setTagFieldwarningAction(true));
    }

    if (title.length >= 3
      && todoTag
      && todoInfo.subtaskList.length > 1
    ) {
      dispatch(todoActions.todosFillAction([...newTodoList]));
      dispatch(todoActions.changeVisibilityTodoInfoAction(false));
    }
  };

  const changeTitleErrorStatus = (value) => {
    dispatch(todoActions.setTitleWarningAction(value));
  };

  const changeTitleInputText = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeTitleInputTextAction(value));

    if (value.length >= 3) {
      changeTitleErrorStatus(false);
    }
  };

  const changeDeadlineDate = (event) => {
    const { value } = event.target;

    dispatch(todoActions.getDeadlineDateAction(value));
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

    if (subtaskList.length > 1) {
      dispatch(todoActions.setSaubtasksWarningAction(false));
    }
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

    changeSubtaskList(newSubtaskList);
    dispatch(todoActions.changeSubtaskInputTextAction(''));
    dispatch(todoActions
      .setSubtaskCompleteStatusAction(false));
  };

  const showTodoInfo = async(event, id) => {
    event.stopPropagation();

    if (!visibilityTodoInfo) {
      resetWarningErrors();
    }

    const selectedTodoInfo = await todoList.find(todo => todo.id === id);

    dispatch(todoActions.setVisibleNewTaskFormAction(false));
    dispatch(todoActions.getTodoInfoAction(selectedTodoInfo));
    dispatch(todoActions.changeVisibilityTodoInfoAction(true));
  };

  const setSelectedTodoCompleteStatus = () => {
    const { completed } = todoInfo;

    // eslint-disable-next-line no-console
    console.log(todoList);

    dispatch(todoActions.changeCompleteStatusForSelectedTodoAction(!completed));
  };

  const changeTitleForSelectedTodo = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeTitleForSelectedTodoAction(value));

    if (value.length > 2) {
      dispatch(todoActions.setTitleWarningAction(false));
    }
  };

  const changeDeadlineDateForSelectedTodo = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeDeadlineForSelectedTodo(value));
  };

  const changeDescriptionForSelectedTodo = (event) => {
    const { value } = event.target;

    dispatch(todoActions.changeDescriptionForSelectedTodo(value));
  };

  const changeTodoSubtaskList = (newSubtaskList) => {
    dispatch(todoActions.changeTodoSubtaskListAction(newSubtaskList));

    if (todoInfo.subtaskList.length > 1) {
      dispatch(todoActions.setSaubtasksWarningAction(false));
    }
  };

  const changeTodoSelectedSubtaskText = (event, id) => {
    const { value } = event.target;
    const selectedSubtask = todoInfo.subtaskList
      .find(subtask => subtask.id === id);

    let newSubtaskList = [];

    newSubtaskList = todoInfo.subtaskList
      .map(subtask => ((selectedSubtask.id === subtask.id)
        ? {
          ...subtask,
          title: value,
        } : { ...subtask }));

    if (todoInfo.subtaskList.length === 1) {
      changeTodoSubtaskList([...initialState.subtasks.subtaskList]);
    }

    if (!value.length && todoInfo.subtaskList.length > 1) {
      newSubtaskList = todoInfo.subtaskList
        .filter(subtask => subtask.id !== id);
    }

    changeTodoSubtaskList(newSubtaskList);
  };

  const changeTodoSelectedSubstaskCompleteStatus = (id) => {
    const selectedSubtask = todoInfo.subtaskList
      .find(subtask => subtask.id === id);

    const newSubtaskList = todoInfo.subtaskList
      .map(subtask => ((selectedSubtask.id === subtask.id)
        ? {
          ...subtask,
          complete: !subtask.complete,
        } : subtask
      ));

    changeTodoSubtaskList(newSubtaskList);
  };

  const newTodoSubtask = () => ({
    id: todoInfo.subtaskList.length + 1,
    title: subtaskInputText,
    complete: subtaskCompleteStatus,
  });

  const addTodoSubtask = async() => {
    const newSubtaskList = await [...todoInfo.subtaskList, newTodoSubtask()];

    changeTodoSubtaskList(newSubtaskList);
    dispatch(todoActions.changeTodoSubtaskInputTextAction(''));
    dispatch(todoActions
      .setTodoSubtaskCompleteStatusAction(false));
  };

  const changeTodoTag = (modifiedTag) => {
    dispatch(todoActions.changeTodoTagAction(modifiedTag));
  };

  const resetWarningErrors = () => {
    dispatch(todoActions.setTitleWarningAction(false));
    dispatch(todoActions.setTagFieldwarningAction(false));
    dispatch(todoActions.setSaubtasksWarningAction(false));
  };

  const resetFormFields = () => {
    dispatch(todoActions.resetFormAction());
  };

  const resetTodoFormFields = () => {
    dispatch(todoActions.resetEditingSelectedTodoFormAction());
  };

  return {
    visibleNewTaskForm,
    todoList,
    titleInputText,
    descriptionInputText,
    deadlineDate,
    completeStatus,
    warnings,
    subtasks,
    todoInfo,
    visibilityTodoInfo,
    tag,
    closeForms,
    handleSubmit,
    deleteTodo,
    setExternalCompleteStatus,
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
    setTag,
    setVisibleNewTaskForm,
    showTodoInfo,
    setSelectedTodoCompleteStatus,
    changeTitleForSelectedTodo,
    changeDeadlineDateForSelectedTodo,
    changeDescriptionForSelectedTodo,
    changeSelectedTodoInfo,
    changeTodoSelectedSubtaskText,
    changeTodoSelectedSubstaskCompleteStatus,
    changeTodoTag,
    addTodoSubtask,
    resetTodoFormFields,
  };
};
