const fs = require('fs')

class GestionFichier{

    constructor(fichier){
        this.fichier = fichier
    }

LireFichier(){
 this.fichier = fs.readFileSync('fichier', 'utf8')
}

EcrireFichier(){
    const content = 'Salut!'
    this.fichier = fs.writeFileSync('fichier', 'a+' ,content)
}

SupprimerFichier(){
    this.fichier = fs.unlinkSync('fichier')
}

Affichage(){
    this.fichier = console.log(fichier)
}
}

let fichier = "test.txt"
fichier.LireFichier()


const Fichier = require(file.js)

class FichierJSON extends GestionFichier{
    constructor(fichier){
        super(fichier)
    }

    LireJSON(){
        this.LireFichier(this.fichier)

        this.contenuJSON = JSON.parse(this.contenu)
        console.log(this.contenu)
        console.log(this.contenuJSON)

        console.log(this.contenuJSON.model)
    }

    EcrireJSON(cle, valeur){
        this.contenuJSON[cle] = valeur
        this.EcrireFichier(JSON.stringify(this.contenuJSON))
    }
}

module.exports = FichierJSON */