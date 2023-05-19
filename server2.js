const EventEmitter = require('events')
let monEcouteur = new EventEmitter()
monEcouteur.on('saute', function(a,b){
	console.log("J'ai sauté ",10,20)
})// ecoute un event et action // attend l'event 'saute'

monEcouteur.once('saute', function(a,b){
	console.log("J'ai sauté ",30,40)
})// ecoute un event et action une seule fois  // attend l'event 'saute'

monEcouteur.emit('saute') // emet un event'saute'
monEcouteur.emit('saute') // emet un event'saute'
monEcouteur.emit('saute') // emet un event'saute'
monEcouteur.emit('saute') // emet un event'saute'
monEcouteur.emit('saute') // emet un event'saute'