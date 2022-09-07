const TodoItem = (props, targetElement = null) => {
  /*
    props: {
      todoId: string;
      text: string;
    }
  */

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
    const rootElement = targetElement ?? document.createElement('li');
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    rootElement.id = props.todoId;
    rootElement.textContent = props.text;

    return rootElement;
  };

  return render();
};
