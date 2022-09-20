const TodoItem = (props, targetElement = null) => {
  /*
    props: {
      todoId: string;
      text: string;
      onModify: (key: string, newValue: string) => void;
      onDelete: (key: string) => void;
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

  const rootElement = targetElement ?? document.createElement('li');

  const render = () => {
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    rootElement.id = props.todoId;
    rootElement.textContent = props.text;

    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', () => { props.onDelete(props.todoId) });
    deleteButton.textContent = 'Delete';
    rootElement.appendChild(deleteButton);

    return rootElement;
  };

  return render();
};
