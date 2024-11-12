const myString = "Eg har matteprøve på onsdag og er stressa";

console.log(myString.length);

const wordCount = myString.split(" ").length;
console.log("Antall ord i setningen:", wordCount);

console.log("Første bokstav i setningen:", myString[0]);
console.log("Siste bokstav i setningen:", myString[myString.length - 1]);

if (myString.includes("JavaScript")) {
  console.log("Teksten inneheld ordet 'JavaScript'.");
} else {
  console.log("Teksten inneheld ikkje ordet 'JavaScript'.");
}

console.log("Store bokstavar:", myString.toUpperCase());

console.log("Små bokstavar:", myString.toLowerCase());

console.log("Utan mellomrom:", myString.replace(/ /g, ""));
