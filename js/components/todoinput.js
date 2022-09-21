const TodoInput = (props, targetElement = null) => {
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

  const rootElement = targetElement ?? document.createElement('div');

  const render = () => {
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }

    rootElement.appendChild(textInput);
    rootElement.appendChild(createButton);

    return rootElement;
  };

  return render();
};
