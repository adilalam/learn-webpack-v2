const makeButton = (buttonName) => {

  const button = document.createElement('button');

  button.innerText = `Button ${buttonName}`

  return button;
}

module.exports = makeButton;