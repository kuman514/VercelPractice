const App = () => {
  const state = {
    todos: {
      'test1': 'test mock todo 1',
      'test2': 'test mock todo 2',
      'test3': 'test mock todo 3',
      'test4': 'test mock todo 4',
      'test5': 'test mock todo 5',
    },
    todoText: '',
  };

  const setState = (newState) => {
    let changed = false;
    Object.entries(newState).forEach(([key, value]) => {
      if (state[key] && state[key] === value) return;
      changed = true;
      state[key] = value;
    });
    if (!changed) return;
    render();
  };

  const render = () => {
    const rootElement = document.createElement('div');
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    // Render TodoList
    rootElement.appendChild(TodoList({
      todos: state.todos,
      onModify: (key, newValue) => {
        const newTodos = structuredClone(state.todos);
        newTodos[key] = newValue;
        setState({ todos: newTodos });
      },
      onDelete: (key) => {
        const newTodos = structuredClone(state.todos);
        delete newTodos[key];
        setState({ todos: newTodos });
      },
    }, document.createElement('ul')));

    // Render TodoInput

    return rootElement;
  };

  return render();
};
