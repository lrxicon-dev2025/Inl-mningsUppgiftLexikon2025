// Rolig konsol-hälsning.
console.log("%c🚀 Välkommen till DevHub där koden är snygg och kaffet är starkt! ☕", "font-size: 18px; color: #0a84ff;");

// Random meme-quote på startsidan
const quotes = [
  "Debugging är som att vara detektiv i en deckare där du också är mördaren.",
  "Det finns 10 sorters människor de som förstår binärt och de som inte gör det.",
  "Varför programmerare hatar naturen? Den har för många buggar.",
  "Jag skulle förklara det... men jag har varken tid eller Crayon."
];

window.onload = function() {
  const q = document.getElementById("random-quote");
  if(q) q.textContent = quotes[Math.floor(Math.random() * quotes.length)];
};