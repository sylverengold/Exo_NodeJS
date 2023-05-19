let hello = function(){//on cree une function
	console.log('Ola ketal?')
}

let coucou = function(){//on cree une function privée non exportée
	console.log('A ke koukou !')
}


//module.exports = hello // element à exporter // ici la variable hello resultat de la function
module.exports = {hello:hello}  // element à exporter // ici un objet contenant la variable hello

module.exports.tchao = function(){
	console.log('A tchaobonsouar !')
	}