const button = document.querySelector('button');
const colorSelect = document.querySelector('#color-select');
const sizeSelect = document.querySelector('#size-select');
const container = document.querySelector('#container');

container.addEventListener('click', (ev) => {
  ev.target.parentNode.removeChild(ev.target);
});

button.addEventListener('click', () => {
  const color = colorSelect.value;
  const size = sizeSelect.value;
  const circle = document.createElement('div');
  circle.addEventListener('click', () => {
    console.log('hello world');
  });
  circle.classList.add(size);
  circle.classList.add(color);
  container.append(circle);
});

// console.log(ev.target);
// allows you to console.log the target of a click
