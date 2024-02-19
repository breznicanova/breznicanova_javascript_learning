import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("red", "1.4TDI", "diesel");

dieselCar.logCarProperties();

const electroCar = new CarBlueprint("grey", "EV 160kW", "electricity");

electroCar.logCarProperties();

new CarBlueprint("green", "1.2TSI", "petrol").logCarProperties();

dieselCar.repaint("black");
dieselCar.logCarProperties();

// toto mi prefarbí ten dieselCar, pretože som nepoužila to new
const newCar = dieselCar;
newCar.repaint("white");
dieselCar.logCarProperties();

const dieselCarColor = dieselCar.getColor();
console.log(dieselCarColor);
