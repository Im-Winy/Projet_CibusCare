/* Liens intéractifs */
let liensNavigations = document.querySelectorAll('a.lien-navigation');
console.log(liensNavigations);

/* 1er lien */
function changementCouleur() {
    liensNavigations[0].style.color = "#30744c";
}
liensNavigations[0].addEventListener('mouseover', changementCouleur);

function couleurNoir() {
    liensNavigations[0].style.color = "black";
}
liensNavigations[0].addEventListener('mouseleave', couleurNoir);

/* 2ème lien */
function changementCouleur1() {
    liensNavigations[1].style.color = "#30744c";
}
liensNavigations[1].addEventListener('mouseover', changementCouleur1);

function couleurNoir1() {
    liensNavigations[1].style.color = "black";
}
liensNavigations[1].addEventListener('mouseleave', couleurNoir1);

/* 3ème lien */
function changementCouleur2() {
    liensNavigations[2].style.color = "#30744c";
}
liensNavigations[2].addEventListener('mouseover', changementCouleur2);

function couleurNoir2() {
    liensNavigations[2].style.color = "black";
}
liensNavigations[2].addEventListener('mouseleave', couleurNoir2);

/* 4ème lien */
function changementCouleur3() {
    liensNavigations[3].style.color = "#30744c";
}
liensNavigations[3].addEventListener('mouseover', changementCouleur3);

function couleurNoir3() {
    liensNavigations[3].style.color = "black";
}
liensNavigations[3].addEventListener('mouseleave', couleurNoir3);

