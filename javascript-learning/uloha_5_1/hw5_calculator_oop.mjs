export class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    console.log(`Zadal si čísla ${this.number1} a ${this.number2}.`);
  }

  addition() {
    let sum = this.number1 + this.number2;
    return sum;
    // console.log(`Sum of given numbers is: ${sum}`);
  }

  substraction() {
    let diff = this.number1 - this.number2;
    return diff;
    // console.log(`Substraction of given numbers is: ${diff}`);
  }

  multiplication() {
    let mul = this.number1 * this.number2;
    return mul;
    // console.log(`Multilication of given numbers is: ${mul}`);
  }

  division() {
    let result = this.number1 / this.number2;
    return result;
    /*
    console.log(
      `Division of given numbers is: ${result} (rounded ${
        Math.round(result * 10) / 10
      })`
      
    );
    */
  }
}
