export class Calculator {
  addition(number1, number2) {
    let sum = number1 + number2;
    return console.log(`${number1} + ${number2} = ${sum}`);
  }

  substraction(number1, number2) {
    let diff = number1 - number2;
    return console.log(`${number1} - ${number2} = ${diff}`);
  }

  multiplication(number1, number2) {
    let mul = number1 * number2;
    return console.log(`${number1} . ${number2} = ${mul}`);
  }

  division(number1, number2) {
    let result = number1 / number2;
    return console.log(`${number1} / ${number2} = ${result}`);
  }
}
