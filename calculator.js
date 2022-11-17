// поле для ввода выражения
let input = document.querySelector('.input');

// сохранение части выражения для возведения в степень
let power = "";

// функция для вставки ссимвола в поле ввода
function insert(num) {
  if (input.textContent == 0) {
    input.textContent = "";
    input.textContent += num;
  } else
    input.textContent += num;
}

// очистка поля ввода
function clean() {
  input.textContent = "0";
  power = "";
}
// удалене одного символа
function back() {
  let exp = input.textContent;
  input.textContent = exp.substring(0, exp.length - 1);
  if (input.textContent == 0) {
    input.textContent = "0";
  }
}
// подсчет выражения
function equal() {
  let exp = input.textContent;
  if (input.textContent.includes('^')) {
    let tmp = input.textContent.split('^')
    let num = eval(power);
    let pow = +tmp[1]
    input.textContent = Math.pow(num, pow);
    power = "";
    return;
  }
  if (exp) {
    input.textContent = eval(exp);
  }
}
// вычисление проценто
function percent() {
  input.textContent = eval(input.textContent) / 100;
}
// функция добавления констант
function constant(name) {
  if (input.textContent == 0) {
    input.textContent = "";
  }
  if (name == "pi")
    input.textContent += Math.PI.toFixed(8);
  if (name == "e")
    input.textContent += Math.E.toFixed(8);
}
// функция подсчета квадратного корня, возведения в квадрат и в степень
function operation(name) {
  if (name == "sqrt")
    input.textContent = Math.sqrt(eval(input.textContent));
  if (name == "sqr")
    input.textContent = Math.pow(eval(input.textContent), 2);
  if (name == "^-1")
    input.textContent = Math.pow(eval(input.textContent), -1);
  if (name == "^") {
    power = input.textContent;
    input.textContent += "^";
  }
}
// факториал числа
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
  input.textContent = factorial(+eval(input.textContent));
}
// функция для подсчета логарифмов
function log(name) {
  if (name == 'lg') {
    input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
  }
  if (name == 'ln') {
    input.textContent = Math.log(eval(input.textContent)).toFixed(8);
  }
}
// функция для переклчения между градусами и радианами
document.querySelector('.type').addEventListener('click', function() {
  if (document.querySelector('.type').textContent == "deg") {
    this.textContent = "rad";
    console.log('Градусы')
  } else if (document.querySelector('.type').textContent == "rad") {
    this.textContent = "deg";
    console.log('Радианы')
  }
})

// функция для подсчета тригонометрических функций
function f(name) {
  if (name == 'sin') {
    if(document.querySelector('.type').textContent == "deg") {
      //В градусах
      input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      //В радианах
      input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if (name == 'cos') {
    if(document.querySelector('.type').textContent == "deg") {
      //В градусах
      input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      //В радианах
      input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if (name == 'tan') {
    if(document.querySelector('.type').textContent == "deg") {
      //В градусах
      input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      //В радианах
      input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if (name == 'ctg') {
    if(document.querySelector('.type').textContent == "deg") {
      //В градусах
      input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      //В радианах
      input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
    }
  }
}