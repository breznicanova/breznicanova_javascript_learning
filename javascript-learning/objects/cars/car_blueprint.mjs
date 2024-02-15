export class CarBlueprint {
  constructor(color, motor, fuelType) {
    this.color = color;
    this.motor = motor;
    this.fuelType = fuelType;
    this.wheels = 4; // hard code
    console.log("Car created.");
  }

  // metoda
  logCarProperties() {
    console.log(
      `Vehicle information -> Color: ${this.color}, Motor: ${this.motor}, Fuel type: ${this.fuelType}, Wheels: ${this.wheels}.`
    );
  }

  repaint(newColor) {
    console.log(`Car was repainted from ${this.color} to ${newColor}`);
    this.color = newColor;
  }

  getColor() {
    return this.color;
    console.log("toto sa nevypíše"); // za return sa už nič nevykoná
  }
}
