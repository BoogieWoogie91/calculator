function plus () {
  const num1 = +(document.getElementById('num1').value);
  const num2 = +(document.getElementById('num2').value);  
  const plusResult = (num1 + num2).toFixed(6);  
  document.getElementById('result').innerHTML = plusResult;  
  if (isNaN(plusResult) === true) {
    document.getElementById('warning').innerHTML = 'Enter a Number Please';
  }  
}

function minus () {
  const num1 = +(document.getElementById('num1').value);
  const num2 = +(document.getElementById('num2').value);
  const minusResult = (num1 - num2).toFixed(6);
  document.getElementById('result').innerHTML = minusResult;
  
  if (isNaN(minusResult) === true) {
    document.getElementById('warning').innerHTML = 'Enter a Number Please';
  }
}

function amplify () {
  const num1 = +(document.getElementById('num1').value);
  const num2 = +(document.getElementById('num2').value);
  const amplifyResult = (num1 * num2).toFixed(6);
  document.getElementById('result').innerHTML = amplifyResult;
  
  if (isNaN(amplifyResult) === true) {
    document.getElementById('warning').innerHTML = 'Enter a Number Please';
  }
}

function divide () {
  const num1 = +(document.getElementById('num1').value);
  const num2 = +(document.getElementById('num2').value);
  const divideResult = (num1 / num2).toFixed(6);
  document.getElementById('result').innerHTML = divideResult;
  
  if (isNaN(divideResult) === true) {
    document.getElementById('warning').innerHTML = 'Enter a Number Please';
  }
}

function sqrt () {
  const num1 = +(document.getElementById('num1').value);
  const num2 = +(document.getElementById('num2').value);
  const sqrtResult = Math.sqrt(num1 + num2).toFixed(6);
  document.getElementById('result').innerHTML = sqrtResult;
  
  if (isNaN(sqrtResult) === true) {
    document.getElementById('warning').innerHTML = 'Enter a Number Please';
  }
}

function pow () {
  const num1 = +(document.getElementById('num1').value);
  const num2 = +(document.getElementById('num2').value);
  const powResult = Math.pow(num1, num2).toFixed(6);
  document.getElementById('result').innerHTML = powResult;
  
  if (isNaN(powResult) === true) {
    document.getElementById('warning').innerHTML = 'Enter a Number Please';
  }
}






































