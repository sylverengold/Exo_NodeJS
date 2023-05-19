let fs = require('fs')

fs.readFile('Rasputin.mp3',(err,data) => {//ici data est un buffer// ici fonction => avec les données data et err
	if (err) throw err
		fs.writeFile('tzar.mp3',data,(err) =>{// ici fonction => avec la donnée err
			if (err) throw err
				console.log ('Le fichier a bien été copié')// si pas d'err le fichier est copié 
		})
})