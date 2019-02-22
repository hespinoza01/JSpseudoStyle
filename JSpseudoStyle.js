HTMLElement.prototype.pseudoStyle = function(pseudoType, property, value){
  const _IDpseudoStyleContainer = 'pseudoStyles',
        _head = document.head || document.getElementsByTagName('head')[0],
        _pseudoStyleContainer = document.getElementById(_IDpseudoStyleContainer) || document.createElement('style');

  _pseudoStyleContainer.id = _IDpseudoStyleContainer;

  let counter = document.querySelectorAll('[pseudostyle]').length + 1;
      identifier = `[pseudostyle=${counter}]:${pseudoType}`;

  this.setAttribute('pseudostyle', `${counter}`);

  _pseudoStyleContainer.innerHTML += `
    ${identifier}{
      ${property}: ${value};
    }
  `;

  if(!document.head.querySelector('#pseudoStyles')) _head.appendChild(_pseudoStyleContainer);

  return this;
};
document.querySelector('script').pseudoStyle("before", "a", "v");
