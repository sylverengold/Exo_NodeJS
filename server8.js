let app = require('express')()
//ou
//let express = require('express')
//let app = express()


app.get('/',(request,response)=> {//quand on est la racine
	response.send ('Tu es à la racine')
})

app.get('/demo',(request,response)=> {//quand on est la page demo
	response.send ('Tu es à la page demo')
})

app.listen(8080)//on ecoute sur le port 8080

// grace au json on peut cmd : npm start - il y a des scripts qu'on peut predefinir 