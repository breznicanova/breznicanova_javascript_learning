import { Calculator } from "./hw5_calculator_oop.mjs";

const sum = new Calculator(14, 41);
console.log(`Súčet čísel ${sum.number1} a ${sum.number2}: ${sum.addition()}.`);

const diff = new Calculator(174, 32);
console.log(
  `Rozdiel čísel ${diff.number1} a ${diff.number2}: ${diff.substraction()}.`
);

const mul = new Calculator(47, 50);
console.log(
  `Súčin čísel ${mul.number1} a ${mul.number2}: ${mul.multiplication()}.`
);

const dividing = new Calculator(125, 7);
console.log(
  `Podiel čísel ${dividing.number1} a ${
    dividing.number2
  }: ${dividing.division()} (po zaokrúhlení: ${
    Math.round(dividing.division() * 10) / 10
  }).`
);
