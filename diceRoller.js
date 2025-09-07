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