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
  let result = a / b;
  console.log(
    `Division of given numbers is: ${result} (rounded ${
      Math.round(result * 10) / 10
    })`
  );
}

// zavolanie funkcií
addition(565, 584);
substraction(474, 520);
multiplication(5822, 65);
division(632, 6);
