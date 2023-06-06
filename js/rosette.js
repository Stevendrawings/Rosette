var input = document.querySelector('#inputText')
var trad = document.querySelector('.traducteur')
input.addEventListener('input', valInput)

var tab = 
  [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

var hiero = 
  [
    "&#78143;", "&#78016;", "&#78580;", "&#77991;", "&#78283;", "&#78227;", "&#78780;", 
    "&#78747;", "&#78829;", "&#78753;", "&#78061;", "&#78163;", "	&#78358;", "&#78703;", 
    "&#78010;", "&#78808;", "&#77963;", "&#78467;", "&#78467;", "&#78799;", "&#78703;", 
    "&#78225;", "&#78193;", "&#78753;", "&#78580;", "&#78467;"
  ];

function valInput(){
    var vals = input.value

    while(trad.firstChild){ console.log(trad.removeChild(trad.firstChild)) }

    for(var i = 0; i < vals.length; i = i + 1){
        var newDiv = document.createElement('div');
        var index = tab.indexOf(vals[i])
            if(index != -1){ 
                newDiv.className = 'hiero-' + index;
                trad.appendChild(newDiv)
                newDiv.innerHTML = hiero[index]
            }
        }
    }




