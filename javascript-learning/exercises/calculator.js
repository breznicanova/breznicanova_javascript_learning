function addition(a, b) {
  let sum = a + b;
  console.log(`Sum of given numbers is: ${sum}`);
}

function substraction(a, b) {
  let diff = a - b;
  console.log(`Substraction of given numbers is: ${diff}`);
}

function multiplication(a, b) {
  let mul = a * b;
  console.log(`Multilication of given numbers is: ${mul}`);
}

function division(a, b) {
  if (b != 0) {
    let result = a / b;
    console.log(
      `Division of given numbers is: ${result} (rounded ${
        Math.round(result * 10) / 10
      })`
    );
  } else {
    throw new Error("Delenie nulou!");
  }
}

function empowerment(a, b) {
  let poww = Math.pow(a, b);
  console.log(`Pow of given numbers is: ${poww}`);
}

// zavolanie funkcií
addition(15, 48);
substraction(98, 41);
multiplication(54, 30);
division(88, 6);
empowerment(3, 2);
