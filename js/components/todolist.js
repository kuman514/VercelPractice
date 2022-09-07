const TodoList = (props, targetElement = null) => {
  /*
    props: {
      todos: object<key: string, value: string>;
      onModify: (key: string, newValue: string) => void;
      onDelete: (key: string) => void;
    }
  */

  const rootElement = targetElement ?? document.createElement('ul');

  const render = () => {
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    Object.entries(props.todos).forEach(([key, value]) => {
      rootElement.appendChild(TodoItem({
        todoId: key,
        text: value,
      }));
    });

    return rootElement;
  };

  return render();
};
