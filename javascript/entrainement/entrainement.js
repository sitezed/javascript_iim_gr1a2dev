/*

Chapitres entrainement JS :
- boites de dialogue
- var / let / const
- types de donnes
- operateurs arithmetiques
- concatenation
- conditions if / esle if / else (version ternaire inclus)
- conditions switch
- operateurs logiques
- boucles (do while, while, for)
- fonctions predefinie, fonctions utilisateur
- les objets JS

*/

document.write('<h1>Entrainement JS</h1>'); // la fonction document.write permet d'ecrire dans le document HTML

// window.alert('ok'); // lobjet Window est lobjet qui represene le navigateur. Alert est une fonction de window qui demande dafficher une boite de dialogue
// window est impicite, on peut l'ecrire ou non
// alert('salut');
// window.prompt('saisi une phrase'); // boite de dialogue avec saisie
// window.confirm('ca va ?'); // boite de dialogue avec OK / Annuler
window.console.log('ecrire dans la console');
window.console.info('ecrire en mode info dans la console');
window.console.warn('ecrire en mode danger dans la console');
window.console.error('ecrire en mode erreur');
// ces boites de dialogues sont utilisees en JS pour delivrer une information a l'internaute sans se soucier de la mise en forme


// var / let / const
document.write('<h2>var / let / const</h2>');

// le mot cle "var", comme le mot cle "let", permettent de declarer et affecter des variables
var maBoite = 'contenu';
let monAutreBoite = 'autre contenu';
document.write(maBoite); // contenu
document.write('<br>');
document.write(monAutreBoite); // autre contenu

// difference entre LET et VAR
let maVariableLet = 'salut';
if(true) {
  let maVariableLet = 'autre salut';
  alert(maVariableLet); // autre salut
}
alert(maVariableLet); // salut

var maVariableVar = 'salut';
if(true) {
  var maVariableVar = 'autre salut';
  alert(maVariableVar); // autre salut
}
alert(maVariableVar); // autre salut

