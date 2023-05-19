let http = require('http') // import objet http
let fs = require('fs') // import objet fs
let url = require ('url') // import objet url
const EventEmitter = require('events') // import objet event

let App = {//creation class App
	start: function(port){// methode Start de la class App // le port du server est en param
		let emitter = new EventEmitter()
		let server = http.createServer((request,response)=>{//le duo request/response forme un callback
			response.writeHead(200,{'content-type': 'text/html; charset=uft-8'})
			if(request.url === '/'){//test URL a la racine
				emitter.emit('root',response) // emettre un event
			}
			else{
				emitter.emit('noRoot',response) // emettre un event
			}
			response.end()//fin de la request // dans tt les cas


		}).listen(port) // on ouvre le port 8080 et dedans on fait les instructions
		return emitter // on retourne l'event
	}
}

module.exports = App