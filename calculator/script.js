function append(val) {
  document.querySelector("#display").value += val;
}

function cleardis() {
  document.querySelector("#display").value ='';
}

function calculate() {
  let expression = document.querySelector("#display").value;
  expression = expression.replace(/√\(/g, 'Math.sqrt(')
                         .replace(/log\(/g, 'Math.log10(')
                         .replace(/sin\(/g, 'Math.sin(')
                         .replace(/cos\(/g, 'Math.cos(')
                         .replace(/tan\(/g, 'Math.tan(')
                         .replace(/\^/g, '**');

  try {
    let result = eval(expression);
    document.querySelector("#display").value = result;
  } catch {
    document.querySelector("#display").value = "Error";
  }
}
