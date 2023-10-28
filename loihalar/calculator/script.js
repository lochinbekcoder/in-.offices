const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      input.value = eval(input.value);
    } else if (button.value === 'C') {
      input.value = '';
    } else if (button.value === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += button.value;
    }
  });
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    input.value = eval(input.value);
  } else if (e.key === 'Escape') {
    input.value = '';
  } else if (e.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  } else if (/[-+*/.0-9]/.test(e.key)) {
    input.value += e.key;
  } else {
    e.preventDefault();
  }
});

const historyList = document.querySelector('.history-list');

function addToHistory(input, output) {
  const li = document.createElement('li');
  li.textContent = `${input} = ${output}`;
  historyList.appendChild(li);
}

function clearHistory() {
  historyList.innerHTML = '';
}
function calculate() {
  const input = document.querySelector('.input').textContent;
  const output = eval(input);
  document.querySelector('.output').textContent = output;
  addToHistory(input, output);
}
