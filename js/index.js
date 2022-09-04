(() => {
  const renderTarget = document.querySelector('.app');
  while (renderTarget.firstChild) {
    renderTarget.removeChild(renderTarget.firstChild);
  }
  renderTarget.appendChild(App());
})();
