let http = require('http') // import objet http
let fs = require('fs')
let server = http.createServer() //instance
server.on('request',(request,response) => {
	fs.readFile('iindex.html',(err, data) => {
		  //if (err) throw err
		if (err){
			response.writeHead(404)
			response.end ('Ce fichier n\'existe pas')
		}
		else{		  	
			response.writeHead(200,{'content-type': 'text/html; charset=uft-8'})
			response.write (data)	
			response.end ()
		}

//	response.end ('Salut comment ça va?')
console.log('Il y a une requete');
	})
})
server.listen(8080) //port du serveur



//