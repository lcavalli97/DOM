const addProduct = () => {
  const input = document.querySelector('input');
  const text = input.value;
  const ul = document.querySelector('ul');
  
  if (text !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.innerHTML = text;
    li.appendChild(checkbox);
    ul.appendChild(li);
    input.value = '';
  }
};
