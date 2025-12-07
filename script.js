// Random meme-quote på startsidan
const quotes = [
    "Debugging är som att vara detektiv i en deckare där du också är mördaren.",
    "Det finns 10 sorters människor de som förstår binärt och de som inte gör det.",
    "Varför programmerare hatar naturen? Den har för många buggar.",
    "Jag skulle förklara det... men jag har varken tid eller Crayon."
];

// Use DOMContentLoaded instead of window.onload for bfcache compatibility
document.addEventListener('DOMContentLoaded', function () {
    const q = document.getElementById("random-quote");
    if (q) q.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});

// Prenumerationsformulär submission handler
function doSubscribe(e) {
    e.preventDefault();
    var name = document.getElementById("subName").value.trim();
    document.getElementById("sub-success").style.display = "block";
    document.getElementById("subResultName").textContent = name || 'Subscriber';
    // Clear form (no backend, demo only)
    document.getElementById("subName").value = "";
    document.getElementById("subEmail").value = "";
    document.getElementById("subMessage").value = "";
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById("sub-success").style.display = "none";
    }, 5000);
    return false;
}
