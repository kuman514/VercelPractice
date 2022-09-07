const TodoInput = (props) => {
  /*
    props: {
      onCreate: (newValue: string) => void;
    }
  */

  const textInput = document.createElement('input');
  textInput.type = 'text';

  const createButton = document.createElement('button');
  createButton.textContent = 'Add Todo';
  createButton.addEventListener('click', () => {
    if (textInput.value.trim().length <= 0) return;
    props.onCreate(textInput.value);
    textInput.value = '';
  });

  const render = () => {
    const rootElement = document.createElement('div');
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    rootElement.appendChild(textInput);
    rootElement.appendChild(createButton);

    return rootElement;
  };

  return render();
};
