// var , let, const
// let
let firstName = "Adriana";
let lastName;
console.log(firstName);
firstName = "Jan";
console.log(firstName);
lastName = "Kříž";
console.log(lastName);

// var
if (true) {
  var varInsideIf = "Premenna var";
}
var varInsideIf = "Zmenené"; // redeklarace, je to blbé
console.log(varInsideIf);

if (true) {
  let letInsideIf = "Premenna let";
  console.log(letInsideIf);
}

// console.log(letInsideIf);  -->  vypíše chybu

//const  -->  premenná, ktorá by sa nemala meniť
// musíme ju nastaviť po vytvorení
const constantVariable = "Adriana";

/* viceradkovy
   komentár*/

//  CTRL+SHIFT+/
