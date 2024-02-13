const actualAge = 16;
const drinkingLimitAge = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingLimitAge) {
  // template literal ``
  console.log(`${fullName} už môže piť alkohol.`);
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ešte nemôže piť alkohol. Chýba mu ešte ${
      drinkingLimitAge - actualAge
    } rok/rokov.`
  );
} else {
  throw new Error("Neplatný vek!");
}

const points = -95;
const name = "Josef Nový";

if (points <= 100 && points >= 90) {
  console.log(`${name}, dostal si A!`);
} else if (points < 90 && points >= 85) {
  console.log(`${name}, dostal si B!`);
} else if (points < 85 && points >= 75) {
  console.log(`${name}, dostal si C!`);
} else if (points < 75 && points >= 70) {
  console.log(`${name}, dostal si D!`);
} else if (points < 70 && points >= 60) {
  console.log(`${name}, dostal si E!`);
} else if (points < 60 && points >= 0) {
  console.log(`${name}, dostal si F! Musíš test opakovať!`);
} else if (points < 0 || points > 100) {
  throw new Error("Neplatný počet bodov!");
}

// Riešenie petra
const studentName = "Marie Poláková";
let grade;

if (points >= 90) {
  grade = "A";
} else if (points >= 85) {
  grade = "B";
} else if (points >= 75) {
  grade = "C";
} else if (points >= 70) {
  grade = "D";
} else if (points >= 60) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`${studentName} získal/a známku: ${grade}`);
