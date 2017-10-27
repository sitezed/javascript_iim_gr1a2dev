// Tableau de calcul

var nombre = document.getElementsByTagName('td')[0],
    carre = document.getElementsByTagName('td')[1],
    cube = document.getElementsByTagName('td')[2],
    saisi = document.getElementById('nombre');

saisi.onkeyup = function () {
    nombre.innerHTML = saisi.value;
    var chiffre = parseInt(nombre.innerHTML);
    if (!isNaN(chiffre)) {
        carre.innerHTML = chiffre * chiffre;
        cube.innerHTML = chiffre * chiffre * chiffre;
    }
};
//----------------------------------------------------------
// Copieur
var texte = document.getElementById('texte'),
    copie = document.getElementById('copie');

texte.onkeyup = function () {
    copie.value = texte.value;
};

// ----------------------------------------------------------
// Déplacement carré
var bouge = document.getElementById("bouge"),
    move1 = document.getElementById("move1");

bouge.onclick = function () {
    if ((!move1.style.left || move1.style.left === '0px') && (move1.style.bottom === '0px' || !move1.style.bottom)) {
        move1.style.left = '100px';
        move1.style.bottom = '0px';
    } else if (move1.style.left === '100px' && move1.style.bottom === '0px') {
        move1.style.bottom = '100px';
    } else if (move1.style.left === '100px' && move1.style.bottom === '100px') {
        move1.style.left = '0px';
    } else if (move1.style.left === '0px' && move1.style.bottom === '100px') {
        move1.style.bottom = '0px';
    }
};


//----------------------------------------------------------
// Déplaceur
var move = document.getElementById("move");

var temoin = true,
    pixels;
move.style.left = '10px';
document.getElementById('field').onwheel = function (e) {
    e.preventDefault();
    pixels = parseInt(move.style.left.slice(0, -2));
    if (pixels < 500 && temoin) {
        move.style.left = pixels + 10 + 'px';
    } else {
        temoin = false;
        move.style.left = pixels - 10 + 'px';
        if (pixels < 10) {
            temoin = true;
        }
    }
};
// test de perf : http://jsperf.com/function-in-variable2

//----------------------------------------------------------