function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function generateLetterCaptcha() {
    var captchaText = generateRandomString(6); // Генерация случайной строки из букв
    document.getElementById('captchaTextLabel').textContent = captchaText;
    return captchaText;
  }
  
  function generateSumCaptcha() {
    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
    document.getElementById('captchaTextLabel').textContent = firstNumber + ' + ' + secondNumber + ' = ';
    return firstNumber + secondNumber;
  }
  
  function isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  
  function validateCaptcha() {
    var captchaInput = document.getElementById('captchaInput').value;
    document.getElementById('captchaTextLabel').textContent = generateRandomString();
    var captchaText = document.getElementById('captchaTextLabel').textContent;
    alert( captchaText);
    if (captchaInput.toLowerCase() === captchaText.toLowerCase()) {
      document.getElementById('message').textContent = 'Молодец!';
    } else {
      var sumCaptchaResult = generateSumCaptcha();
      var userSum = prompt('Пожалуйста, введите сумму двух чисел:');
      if (userSum && parseInt(userSum) === sumCaptchaResult) {
        document.getElementById('message').textContent = 'Ура!';
      } else {
        document.getElementById('message').textContent = 'Ошибка. Попробуйте ещё раз.';
      }
    }
  }
  
  // Пример использования функции isEmpty
  var testObj = {};
  console.log(isEmpty(testObj));  // true
  