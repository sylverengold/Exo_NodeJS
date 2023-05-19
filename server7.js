//let _ = require('lodash')// le chemin est automatique
let map = require('lodash/map')// le chemin est automatique
//chargement dependance ici lodash
// cmd : npm init 
// name : (NodeJS) -> mettre le nom en miniscule
//entry point : -> metre le fichier d'entrée ici server7.js
//ok // des fichiers package.json et package-lock.json sont creer a la racine

//cmd : npm install --save lodash // ou // npm i -S lodash
// un dossier est creer 


console.log(map([1,2,3],function(n){return n*3;}))
 
let app = require('./app7').start(8080) //on importe la fonction app et on recupere la methode start 
app.on('root',function (response){
	response.write('je suis à la racine')
})
app.on('noRoot',function (response){
	response.write('je ne suis pas à la racine')
})

