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

// ajouter un écouteur d'évènement : lorsque l'utilisateur saisi une ligne et appui sur entrée (input) 

rl.on('line', (input) => {
    //on stocke le résultat dans une constante 
    // ajout trim() et toLowerCase pour supprimer les espaces et les majuscules
    const commande = input.toLowerCase().trim()


        if (commande === 'help') {
        console.log(`Indiquez un nombre pour lancer des dés, ou "bye" pour quitter.`);

        } else if (commande === 'bye') {
            rl.close();

        } // gérer le cas où l'utilisateur ne tape rien ou autre chose qu'un nombre 
        else if ( commande === ' ' || isNaN(commande) === (commande)){
            console.log(`Erreur: commande non reconnue. Indiquez un nombre pour lancer des dés, ou 'bye' pour quitter.`)

        } else {

            const nombreDeDes = Number(commande)
            let somme = 0;

            //boucler suivant le nombre de lancés 

            for (let i=0; i<nombreDeDes; i++){
                const resultat = rollRandomDice(6)
                // il faut ajouter les résultats les uns aux autres 
                console.log(resultat)
                somme += resultat
        }
        
        
        console.log(`La somme des ${nombreDeDes} dés fait ${somme}.`)

}});