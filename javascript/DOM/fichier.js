var objetJavascript = {
  propriete : 'valeur',
  methode : function(argument) {
    // code de ma fonction avec aurgment
  },
  autrePropriete : 'autre valeur',
  proprieteObjet : {
    sousPropriete : 'sous Valeur'
  }
};

console.log(objetJavascript.propriete);
console.info(objetJavascript.methode('texte'));
console.log(objetJavascript.proprieteObjet.sousPropriete);
//==========================================
document.getElementById('clement').onmouseover = function() {
  this.setAttribute('class', 'bleu'); // "this" renvoie a l'element HTML seletionne
};
document.getElementById('clement').onmouseout = function() {
  this.setAttribute('class', 'marron');
};

//== exemples avec fonctions ========= //
function retreciJaune() {
  document.getElementsByClassName('jaune')[0].style.width = '100px';
  // une selection par classe retourne un Array JS. Pour acceder a la premiere div jaune, je rajoute l'indice [0]
}

var smallJaune = document.getElementById('smallJaune');
smallJaune.onclick = function(){
  retreciJaune();
};

function retreciTousLesJaunes() {
  // je recupere un Array JS des jaunes
  var lesJaunes = document.getElementsByClassName('jaune');
  console.log(lesJaunes);
  var nbreJaunes = lesJaunes.length; // nombre de jaunes
  console.log(nbreJaunes);

  for(var i=0; i<nbreJaunes; i++) {
    document.getElementsByClassName('jaune')[i].style.width = '100px';
  }
}
var smallAllJaune = document.getElementById('smallAllJaune');
smallAllJaune.onclick = function(){
  retreciTousLesJaunes();
};

function changerCouleur() {
  var aaron = document.getElementById('aaron');
  var classCourante = aaron.getAttribute('class'); // me permet de recuperer la valeur de l'attribut visé
  if(classCourante === 'jaune') {
    aaron.setAttribute('class', 'marron');
  } else if (classCourante === 'marron')
  {
    aaron.setAttribute('class', 'jaune');
  }
}
document.getElementById('aaron').onclick = function() {
  changerCouleur();
};

// exercice :
// creer une image, faire en sorte de changer dimage, a chaque clic sur limage. Faire tourner les 5 images (a.jpg,b.jpg,c.jpg,d.jpg,e.jpg)
