const button = document.querySelector('button');
const colorSelect = document.querySelector('#color-select');
const sizeSelect = document.querySelector('#size-select');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
  const color = colorSelect.value;
  const size = sizeSelect.value;
  const circle = document.createElement('div');
  circle.classList.add(size);
  circle.classList.add(color);
  container.append(circle);
});
