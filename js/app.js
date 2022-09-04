function App() {
  const render = () => {
    const rootElement = document.createElement('div')
    rootElement.textContent = 'JavaScript runs good!';
    return rootElement;
  }

  return render();
}
