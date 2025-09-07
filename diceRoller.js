// Je dois importer les modules dont j'ai besoin : 
// - readLine 
// - process 

import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

// Je créer la fonction pour générér un nombre aléatoire 
// +1 car on veut un nombre de 1 à 6 et non de 0 à 5

function rollRandomDice(max){
return Math.floor(Math.random()* max) +1
}

console.log(rollRandomDice(6))

// ajouter un écouteur d'évènement : lorsque l'utilisateur saisi une ligne et appui sur entrée (input) 

rl.on('line', (input) => {
    //on stocke le résultat dans une constante 
    // ajout trim() et toLowerCase pour supprimer les espaces et les majuscules
    const commande = input.toLowerCase().trim()
    console.log (`Vous avez saisi ${commande}`)

})





// if (commande === 'help') {
//      console.log(`Indiquez un nombre pour lancer des dés, ou "bye" pour quitter.`);