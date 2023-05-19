let fs = require('fs')
let file ="Rasputin.mp3"
let file2 ="Rasputin2.mp3"



fs.stat(file,(err,stat) =>{//stat recupere des info du fichier
	let total = stat.size
	let progress = 0
	let read = fs.createReadStream(file) // on cree un objet stream de lecture
	let write = fs.createWriteStream(file2) // on cree un objet stream d'ecriture
	read.on('data',(chunk)=>{///chunk est buffer // un morceau du flux 
		progress += chunk.length
		console.log("j'ai lu " + Math.round(100*progress/total)+"%")
	})
	read.pipe(write) // on conecte le flux de lecture au flux d'écriture
	/*read.on('end',()=>{
		console.log("j'ai fini de lire le fichier")
	})*/
	write.on('finish',()=>{
		console.log("j'ai fini de lire le fichier")
	})
})




