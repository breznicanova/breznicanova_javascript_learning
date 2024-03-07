import { EntryHall } from "./entry_hall.mjs";

export class Bathtroom {
  constructor() {
    console.log("Návštevník vstúpil na toaletu.");
  }

  returnToEntryHall() {
    console.log("Návštevník sa vracia do haly.");
    return new EntryHall();
  }

  washHands() {
    console.log("Užívateľ/ka si umyl/a ruky.");
    return this;
  }
}
