let http = require('http') // import objet http
let fs = require('fs') // import objet fs
let url = require ('url') // import objet url

let server = http.createServer() //instance

server.on('request',(request,response) => {
	response.writeHead(200)
	let query = url.parse(request.url,true).query
	// on recupere l'url et parse interprete les éléments
	let name = query.name === undefined ? 'Anonyme' : query.name
	// fonction ternaire 
	//fs.readFile('index.html',(err,data)=> {
	//on recupere un callback - le contenu du fichier - un buffer - une err et un flux de données
	fs.readFile('index.html','utf8',(err,data)=> {
	// rajoute 'utf8' pour convertir le flux en string - texte
	if (err){
		response.writeHead(404)//gestion d'err
		response.end('Ce fichier n\' existe pas !')
	} else{
		response.writeHead(200,{'content-type': 'text/html; charset=uft-8'})//entete de la reponse
		data = data.replace('{{ name }}',name)// replacer dans le html
		response.end(data)
	}	
	})
})

server.listen(8080) //port du serveur



//