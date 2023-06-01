var input = document.querySelector('#valInput');
var trad = document.querySelector('.traducteur');

input.addEventListener('input', foo);

var tab = 
  [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  
var hieroglyphe = 
  [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", 
    "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"
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








