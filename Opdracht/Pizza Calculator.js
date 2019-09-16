// Indy Kroonen
// Opdracht: Pizza calculator

var small = 3;
var medium = 5;
var large = 7; 

var smallAmount = prompt("Hoeveel small pizza's wilt u?");
var mediumAmount = prompt("Hoeveel medium pizza's wilt u?"); 
var largeAmount = prompt("Hoeveel large pizza's wilt u?");

var smallTotal = smallAmount * small;
var mediumTotal = mediumAmount * medium;
var largeTotal = largeAmount * large;.
console.log("test")

//Aantallen van de pizza
document.write("<br>" + "Small = " + smallAmount);
document.write("<br>" + "Medium = " + mediumAmount);
document.write("<br>" + "Large = " + largeAmount);
console.log("test")

//Bedrag per pizza soort
document.write("<br>");
document.write("<br>" + "Prijs small: " + "&euro;" + smallTotal); 
document.write("<br>" + "Prijs medium: " + "&euro;" + mediumTotal); 
document.write("<br>" + "Prijs large: " + "&euro;" + largeTotal); 
console.log("test")

// Totaal bedrag
document.write("<br>");
document.write("<br>");
document.write("Totaal bedrag: " + " &euro;" + (smallTotal + mediumTotal + largeTotal)); 
console.log("test")

