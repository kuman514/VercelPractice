const TodoItem = (props, targetElement = null) => {
  /*
    props: {
      todoId: string;
      text: string;
      onModify: (key: string, newValue: string) => void;
      onDelete: (key: string) => void;
    }
  */

  const state = {
    isModifyMode: false,
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

  const setIsModifyMode = (newIsModifyMode) => {
    setState({ isModifyMode: newIsModifyMode });
  };

  const rootElement = targetElement ?? document.createElement('li');

  const render = () => {
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    rootElement.id = props.todoId;

    if (state.isModifyMode) {
      const modifyInput = document.createElement('input');
      modifyInput.value = props.text;
      rootElement.appendChild(modifyInput);

      const confirmButton = document.createElement('button');
      confirmButton.addEventListener('click', () => {
        props.onModify(props.todoId, modifyInput.value);
        setIsModifyMode(false);
      });
      confirmButton.textContent = 'Confirm Modify';
      rootElement.appendChild(confirmButton);

      const cancelButton = document.createElement('button');
      cancelButton.addEventListener('click', () => { setIsModifyMode(false); });
      cancelButton.textContent = 'Cancel';
      rootElement.appendChild(cancelButton);
    } else {
      rootElement.textContent = props.text;

      const modifyButton = document.createElement('button');
      modifyButton.addEventListener('click', () => { setIsModifyMode(true); });
      modifyButton.textContent = 'Modify';
      rootElement.appendChild(modifyButton);

      const deleteButton = document.createElement('button');
      deleteButton.addEventListener('click', () => { props.onDelete(props.todoId); });
      deleteButton.textContent = 'Delete';
      rootElement.appendChild(deleteButton);
    }

    return rootElement;
  };

  return render();
};
