//Decisione della difficoltà
var difficulty = prompt("Decidi la difficoltà \nFacile \nMedio \nDifficile").trim().toLowerCase();
//Verifica e impostazione della difficoltà
if (difficulty == "facile") {
  var max = 100;
  var min = 1;
}else if (difficulty == "medio") {
  var max = 80;
  var min = 1;
}else if (difficulty == "difficile") {
  var max = 50;
  var min = 1;
}else {
  var max = 100;
  var min = 1;
}
//Array dei 16 numeri
var range = [];
//Creazione dei 16 numeri da evitare con ciclo while per evitare doppioni
for (var i = 0; i < 16; i++) {
  var number = Math.floor(Math.random() * (max - min) ) + min;
  while (range.includes(number)) {
    var number = Math.floor(Math.random() * (max - min) ) + min;
  }
  range.push(number);
}
console.log(range);
//Inserimento primo numero del utente
var clientNumber = parseInt( prompt("Ehy, inserisci un numero da 1 a 100") );
//Verifica della disuguaglianza tra numero utente e numeri array range, se falsa = alert , se vera = prompt
while ( clientNumber !== number ) {
  if ( range.includes(clientNumber) == true){
    alert("ops! Hai perso");
  } else {
    var clientNumber = parseInt( prompt("Ehy, inseriscine un altro") );
  }
}
