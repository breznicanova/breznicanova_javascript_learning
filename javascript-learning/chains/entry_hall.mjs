import { Bathtroom } from "./bathroom.mjs";

export class EntryHall {
  constructor() {
    console.log("Návštevník prišiel do vstupnej haly.");
  }

  entryBathroom() {
    console.log("Návštevník ide na toaletu.");
    return new Bathtroom();
  }

  askReceptionistQuestion(question) {
    console.log(`Návštevník sa opýtal recepčnej: "${question}"`);
    console.log("Recepčná neodpovedá.");
    return this; // nemôžem urobiť return new EntryHall() --> zase by mi na konci vypísalo Návštevník prišil do vst. haly čo nie je pravda, on už v nej je
  }
}
