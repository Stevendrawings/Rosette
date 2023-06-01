var input = document.querySelector('#valInput');
var trad = document.querySelector('.traducteur');

input.addEventListener('input', foo);

var tab = 
  [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  // &#78799;

  
var hieroglyphe = 
  [
    "&#78143;", "&#78016;", "&#78580;", "&#77991;", "&#78283;", "&#78227;", "&#78780;", 
    "&#78747;", "&#78829;", "&#78753;", "&#78061;", "&#78163;", "	&#78358;", "&#78703;", 
    "&#78010;", "&#78808;", "&#77963;", "&#78467;", "&#78467;", "&#78799;", "&#78703;", 
    "&#78225;", "&#78193;", "&#78753;", "&#78580;", "&#78467;"
  ];

function cible() { return input.value }

function foo() {
  var traducteur = cible();

  // Supprime les balises div existantes
  while (trad.firstChild) {
    trad.removeChild(trad.firstChild);
  }
  
  // Ajoute les nouvelles balises div
  for (var i = 0; i < traducteur.length; i++) {
    var index = tab.indexOf(traducteur[i]);
    if (index !== -1) {
      var newDiv = document.createElement("div");
      newDiv.className = 'hieroglyphe-' + index;
      newDiv.innerHTML = hieroglyphe[index];
      trad.appendChild(newDiv);
    }
  }
}








