const TodoList = (props, targetElement = null) => {
  /*
    props: {
      todos: object<key: string, value: string>;
      onModify: (key: string, newValue: string) => void;
      onDelete: (key: string) => void;
    }
  */

  const render = () => {
    const rootElement = targetElement ?? document.createElement('ul');
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    Object.entries(props.todos).forEach(([key, value]) => {
      const todoItem = document.createElement('li');
      todoItem.id = key;
      todoItem.textContent = value;
      rootElement.appendChild(todoItem);
    });

    return rootElement;
  };

  return render();
};
