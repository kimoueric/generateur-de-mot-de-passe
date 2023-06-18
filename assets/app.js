const tailleMotDePasse = document.getElementById("taille");
const recupTaille = document.getElementById("recuptaille");
const displayMdp = document.getElementById("displayMdp");
const form = document.querySelector("form");
const cricteresContainer = document.querySelector(".cricteresContainer");

let caracteresMinuscule = "abcdefghijklmnopqrstuvwxyz";
let caracteresMajuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumerique = "0123456789";
let caracteresSpeciaux = "!#$%@^&*()_+/.<>?";

let tableauCricteres = [];

let lataille;

tailleMotDePasse.addEventListener("input", (e) => {
  lataille = parseInt(e.target.value);

  if (lataille < 10) lataille = "0" + lataille.toString();

  recupTaille.textContent = lataille;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  tableauCricteres = [];

  if (minuscule.checked) tableauCricteres.push(caracteresMinuscule);
  if (majuscule.checked) tableauCricteres.push(caracteresMajuscule);
  if (numerique.checked) tableauCricteres.push(caracteresNumerique);
  if (symbole.checked) tableauCricteres.push(caracteresSpeciaux);

  let lemotdePasse = tableauCricteres.join("").toString();

  let index = 0;
  let temp = "";

  if (lataille > 0) {
    while (index < lataille) {
      if (lemotdePasse.length > 0) {
        let indexAleatoire = Math.floor(
          Math.random() * lemotdePasse.length
        );
        temp += lemotdePasse[indexAleatoire];
        console.log(indexAleatoire, lemotdePasse, temp);

        index++;
      } else {
        cricteresContainer.classList.add("moveit");

        setTimeout(() => {
          cricteresContainer.classList.toggle("moveit");
        }, 1000);
        break;
      }
    }
  } else {
    tailleMotDePasse.classList.add("moveit");

    setTimeout(() => {
      tailleMotDePasse.classList.toggle("moveit");
    }, 1000);
  }

  displayMdp.value = temp;
});
