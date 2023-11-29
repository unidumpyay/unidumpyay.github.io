function createInputs() {
    const numElements = parseInt(document.getElementById('numElements').value);
    const inputFieldsDiv = document.getElementById('inputFields');
    inputFieldsDiv.innerHTML = '';

    for (let i = 0; i < numElements; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      inputFieldsDiv.appendChild(input);
    }
  }

  function filterArray() {
    const inputs = document.getElementById('inputFields').querySelectorAll('input');
    const array = Array.from(inputs).map(input => parseInt(input.value));

    const valueA = parseInt(document.getElementById('valueA').value);
    const valueB = parseInt(document.getElementById('valueB').value);

    const result = array.filter(item => item >= valueA && item <= valueB);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Результат фильтрации: [${result}]</p>`;

    const beforeDiv = document.getElementById('before');
    beforeDiv.innerHTML = `<p>Изначальный массив: [${array}]</p>`;
  }