/*

Chapitres entrainement JS :
- boites de dialogue
- var / let / const
- types de donnees
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
  // alert(maVariableLet); // autre salut
}
// alert(maVariableLet); // salut

var maVariableVar = 'salut';
if(true) {
  var maVariableVar = 'autre salut';
  // alert(maVariableVar); // autre salut
}
// alert(maVariableVar); // autre salut

// Le mot cle "const" permet de faire des constantes (donc invariables)
const MA_CONSTANTE = 'valeur';
// MA_CONSTANTE = 'autre valeur'; // ERROR : je ne peux pas modifier une constante
// par convention les constantes se nomment en MAJUSCULE
var MA_CONSTANTE_AUTRE = 'valeur'; // par convention, nous ecrivions des variables en majuscule pour indiquer qu'il s'agit de constantes, car le mot cle "const" n'etait pas compatible avec tous les navigateurs
document.write('<br>');
document.write(MA_CONSTANTE);
document.write('<br>');
document.write(MA_CONSTANTE_AUTRE);

// type de donnees
document.write('<h2>Type de donnees</h2>');
let chiffre = 10;
let autreChiffre = 10.5;
let texte = 'texte';
let vrai = true;
let faux = false;

// 3 types de donnees scalaires (donc qui ne peuvent pas servir de stockage comme les Arrays ou Objets) : number, string, boolean
document.write(typeof chiffre); // number
document.write('<br>');
document.write(typeof autreChiffre); // number
document.write('<br>');
document.write(typeof texte); // string
document.write('<br>');
document.write(typeof vrai); // boolean
document.write('<br>');
document.write(typeof faux); // boolean

// les operateurs arithmetiques
document.write('<h2>operateurs arithmetiques</h2>');

let soustraction = 10 - 5;
let division = 10 / 5;
let multiplication = 10 * 5;
let addition = 10 + 5;
let modulo = 10 % 3; // correspond au reste de division d'entier. Exemple, j'ai 10 billes, 3 personnes, je donne 3 billes par personne, il m'en reste 1.

let nombre = 10;
nombre += 5; // je rajoute 5 a 10. Equivaut a nombre = nombre + 5
document.write(nombre); // 15
// ceci fonctionne avec tous les operateurs : *=, -=, /=, %=

// la concatenation
document.write('<h2>LA CONCATENATION</h2>');
// le symbole de concatenation est le +
let phrase = 'voici une phrase';
document.write('<p>' + phrase + '</p>');
let prenom = 'Bruce';
let nom = 'WAYNE';
document.write('<p>' + prenom + ' ' + nom + '</p>'); // affiche Bruce WAYNE (avec espace)

let info = '10';
let autreInfo = '20';
document.write(info + autreInfo); // 1020
document.write('<br>');
let info2 = 10;
let autreInfo2 = 20;
document.write(info2 + autreInfo2); // 30


// les conditions
document.write('<h2>Conditions</h2>');

// est-ce que 10 est inferieur a 20 ? reponse OUI, je rentre dans la conditon. Reponse NON, je ne rentre pas dans la condition IF, je renre dans le ELSE
if(10 < 20 == true) {
  document.write('je rentre BIEN dans la condition IF');
} else {
  document.write('Je ne rentre PAS dans la condition IF, je rentre dans le ELSE');
}
document.write('<hr>');
// ici, je demande le contraire.
// est-ce que 10 n'est pas inferieur a 20 ? Si la reponse est OUI, je rentre dans le IF. SI la reponse est NON, je rentre dans le ELSE
if(10 < 20 == false) {
  document.write('je rentre BIEN dans la condition IF');
  document.write('10 n\'est PAS inferieur a 20');
} else {
  document.write('Je ne rentre PAS dans la condition IF, je rentre dans le ELSE');
  document.write('10 est BIEN inferieur a 20');
}

let personnage = 'Gon FREECSS';

if(personnage == 'Kirua ZOLDIG') {
  document.write('<p>Il s\'agit bien de Kirua ZOLDIG</p>');
} else if (personnage == 'Gon FREECSS') {
  document.write('<p>non c\'est Gon</p>');
} else if (personnage == 'Kurapika') {
  document.write('<p>non c\'est Kurapika</p>');
} else {
  document.write('<p>Ce n\'est personne</p>');
}

// equivalent en switch case
switch(personnage) {
  case 'Kirua ZOLDIG' :
    document.write('<p>Il s\'agit bien de Kirua ZOLDIG</p>');
    break;
  case 'Gon FREECSS' :
    document.write('<p>non c\'est Gon</p>');
    break;
  case 'Kurapika' :
    document.write('<p>non c\'est Kurapika</p>');
    break;
  default :
    document.write('<p>Ce n\'est personne</p>');
}
// ATTENTION, switch case verifie la valeur ET le type
if('10' == 10){} // ICI nous verifions QUE la valeur, donc la reponse est OUI
if('10' === 10){} // ICI nous verifions la valeur ET le type, donc la rpeonse est NON
