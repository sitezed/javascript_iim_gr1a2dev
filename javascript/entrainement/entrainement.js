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
- les objets et les Arrays JS

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
if('10' == 10){
  document.write('<p>Les valeurs sont egales</p>');
} // ICI nous verifions QUE la valeur, donc la reponse est OUI
if('10' === 10){
  document.write('<p>Les valeurs ET les types sont egaux</p>');
} // ICI nous verifions la valeur ET le type, donc la reponse est NON

// les conditions en ecriture ternaire
// version normale
let chiffreGauche = 5;
let chiffreDroit = 10;
if(chiffreGauche < chiffreDroit) {
  document.write('<p>Nous remarquons que chiffreGauche est bien INFERIEUR a chiffreDroit</p>');
} else {
  document.write('<p>Nous remarquons que chiffreGauche est bien SUPERIEUR a chiffreDroit</p>');
}

// version ternaire
document.write('<p>Nous remarquons que chiffreGauche est bien ' + ((chiffreGauche < chiffreDroit) ? 'INFERIEUR' : 'SUPERIEUR' ) + ' a chiffreDroit</p>');

// les operateurs logiques
document.write('<h2>les operateurs logiques</h2>');
/*
==      compare les valeurs (doivent etre egales)
===     compare type et valeurs (doivent etre egaux)
!=      difference de valeurs
!==     difference de types valeurs
a < b   si a est inferieur a b
a <= b  si a est inferieur ou egal a b
a > b   si a est superieur a b
a >= b  si a est superieur ou egal a b
*/

if(10 < 5 || 20 > 10) {
  // 10 < 5 OU 20 > 10
  // si je rempli une seule des 2 conditions, ou les 2, alors je rentre ICI
  document.write('<p>Au moins, une des 2 conditions est bien remplie</p>');
}

if( 10 < 5 && 20 > 10) {
  // 10 < 5 ET 20 > 10
  // je dois remplir les 2 conditions pour rentrer la dedans
  document.write('<p>Les 2 conditions sont bien remplies</p>');
}

// equivaut a if( 10 < 5 == false )
if( !(10 < 5) ) {
  // si n'est pas 10 inferieur a 5
  document.write('<p>C\'est OUI, 10 n\'est pas inferieur a 5</p>');
}

// les boucles
document.write('<h2>Les boucles</h2>');
// la boucle do while

let i = 11;
do {
  document.write('<p>Instruction pour DO WHILE</p>');
} while( i < 10 );

// la boucle while
while( i < 10 ) {
  document.write('<p>Instruction pour WHILE</p>');
}

// difference entre la DO WHILE et la WHILE :
// La DO WHILE, executera une premiere fois l'instruction ENSUITE verifie la condition pour continuer.
// La WHILE, verifie d'abord la condition avant d'executer l'instruction

// boucle FOR
// initialisation de la variable, condition de bouclage, incrementation
// tant que i est inferieur 5, tu ajoutes 1 a i et tu executes les instructions
for(let i=0; i < 5; i++) {
  // ce code s'executera 4 fois
  document.write('<p>Instruction pour FOR</p>');
}

// les fonctions
document.write('<h2>Les fonctions</h2>');

// Les fonctions predefinies en JAVASCRIPT
let chiffreDix = '10';
let chiffreVingt = '20';
document.write('<p>'+ typeof chiffreDix +'</p>'); // string
document.write('<p>'+ chiffreDix + chiffreVingt + '</p>'); // 1020


chiffreDix = window.parseInt(chiffreDix); // jutilise la fonction predefinie parseInt() pour convertir le type string en type number
chiffreVingt = window.parseInt(chiffreVingt); // jutilise la fonction predefinie parseInt() pour convertir le type string en type number
document.write('<p>'+ typeof chiffreDix +'</p>'); // number
document.write('<p>'+ typeof chiffreVingt +'</p>'); // number
document.write('<p>'+ chiffreDix + chiffreVingt + '</p>'); // 30
// fonction predefinie qui appartient a l'objet Math, et qui donne l'arrondie d'un nombre
document.write(window.Math.round(5.6));

// fonctions utilisateur
// syntaxe la plus uilisee
function maFonction () {
  // instructions de la fonction
}

// cette fonction me permet d'ecrire des titres lorsque je l'execute
// declaration de la fonction
function titre(argument) {
  document.write('<h2>'+ argument +'</h2>');
}
// execution de la fonction
titre('Les fonctions usitlisateur');

// declaration
function ecris(argument) {
  document.write('<p>'+ argument +'</p>');
} // vous remarquerez l'ABSENCE DE POINT VIRGULE
// execution
ecris('Salut');

// autre syntaxe pour declarer une fonction
let monAutreFonction = function() {
  // instructions de ma fonction
  ecris('Instructions de ma fonction');
}; // vous remarquerez le POINT VIRGULE
// l'execution est la meme
monAutreFonction();

// autre syntaxe
// utilisation avec const
const encoreFonction = function() {
  ecris('Instructions de ma encoreFonction');
};
encoreFonction();

// autre syntaxe avec argument
const maDerniereFonction = () => {
  ecris('Instructions de ma maDerniereFonction');
};
maDerniereFonction();

// autre syntaxe avec argument
const encoreDerniereFonction = x => {
  // mon argument est X mais je peux choisir de ne pas l'utiliser dans mes instructions
  ecris('Instructions de ma maDerniereFonction');
};
encoreDerniereFonction();

// autre syntaxe avec argument
const encoreDerniereFonctionAvecArgument = (x) => {
  // mon argument est X mais je peux choisir de ne pas l'utiliser dans mes instructions
  ecris('Instructions de ma maDerniereFonction');
};
encoreDerniereFonctionAvecArgument();

// les objets et les Arrays JS
titre('les objets et les Arrays JS');

/*
En JS, il n'existe qu'un seul type de donnees, il s'agit des OBJETS.
Lorsque qu'on dit qu'une variable est de type STRING ou NUMBER, en realite il s'agit de variable issues de l'objet STRING ou de l'objet NUMBER
exemple :
* */
let phrase2 = 'Je Suis Une Phrase';
// je veux passer cette phrase, entierement en minuscule
// recherche dans la documentation, quelle est la methode (fonction) qui permet de faire ceci
ecris(phrase2.length); // jaccede a la propriete length de l'objet STRING
ecris(phrase2.toLowerCase());
ecris(phrase2.substr(8, 10)); // 1er argument = point de depart, 2eme argument = nombre de caracteres
ecris(phrase2.substring(8, 19)); // 1er argument = point de depart, 2eme argument = point d'arrivee

String.prototype.mahamadou = function() {
  ecris('J\'ecris ma methode');
};
phrase2.mahamadou();

let phrase3 = 'autre chose';
phrase3.mahamadou();

let monObjet = {
  maMethode : function() {
    // traitement de ma methode
  }
};
// si je veux acceder a la methode de mon objet :
monObjet.maMethode();

// objet de type Array
let monTableau = ['valeur 1', 'valeur 2', 'valeur 3']; // Array
ecris(monTableau);
monTableau.splice(1,1);
ecris(monTableau);
Array.prototype.spliceByValue = function(value) {
  let index = this.indexOf(value);
  if (index > -1) {
    this.splice(index, 1);
  }
};
monTableau.spliceByValue('valeur 3');
ecris(monTableau);

let autreTableau = ['ske jeveu', 'encore ske jveu', 'autre chose'];
ecris(autreTableau);
autreTableau.spliceByValue('encore ske jveu');
ecris(autreTableau);

let encoreObjet = {
  propriete : 'valeur',
  methode : function() {
    // traitement
  },
  autreObjet : {
    sousObjet : {
      sousObjet : {

      }
    },
  },
};




















