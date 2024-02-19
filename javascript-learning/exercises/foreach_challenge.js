const first_name = ["Adriana", "Honza", "Milan", "Klára", "Tomáš"];
const last_name = ["B.", "K.", "K.", "K.", "O."];

first_name.forEach((first) => {
  last_name.forEach((last) => {
    console.log(`${first} ${last}`);
  });
});
