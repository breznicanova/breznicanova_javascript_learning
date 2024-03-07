import { EntryHall } from "./entry_hall.mjs";

new EntryHall()
  .askReceptionistQuestion("Kde je toaleta?")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .washHands()
  .returnToEntryHall();
