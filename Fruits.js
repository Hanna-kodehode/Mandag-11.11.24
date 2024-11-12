const fruits = ["dragefrukt", "mango", "granatepple"];
console.log("Fruktene vi startar med", fruits);

fruits.unshift("papaya");
fruits.push("ananas");
console.log("Legg til frukt:", fruits);

fruits.splice(1, 1);
console.log("Fjern frukt nr 2:", fruits);

const lastFruit = fruits.pop();
fruits.unshift(lastFruit);
console.log("Flytt siste frukt fremst:", fruits);
