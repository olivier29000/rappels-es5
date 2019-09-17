function Personne(prenom,nom,pseudo) {
    this.nom=nom,
    this.prenom=prenom,
    this.pseudo=pseudo,

    this.getNomComplet=function () {
        return this.nom + ' ' +this.prenom + ' ' +this.pseudo
    }

    this.getInitiales=function () {
        return this.prenom.charAt(0) + this.nom.charAt(0)
    }

}

var jules=new Personne('Jules','LEMAIRE','jules77');
var paul=new Personne('Paul','LEMAIRE','paul44');

console.log(jules.getNomComplet())

function afficherPersonne(personne) {
    return personne.nom + '\n' + personne.prenom + '\n' +  personne.pseudo + '\n' + personne.getNomComplet()
}

console.log(afficherPersonne(jules))
console.log(afficherPersonne(paul))

jules.pseudo='jules44';
console.log(afficherPersonne(jules))

console.log(jules.age)
Personne.prototype.age='NON RENSEIGNE';
console.log(jules.age)
jules.age=30;
console.log(jules.age)

console.log(jules.getInitiales())

var robert=new Object();
robert.prenom='Robert'
robert.nom='LEPREFET'
robert.pseudo='robert77'
robert.getNomComplet=function () {
    return this.nom + ' ' +this.prenom + ' ' +this.pseudo
}

console.log(robert.getNomComplet())

function Client(prenom,nom,pseudo,numeroClient) {
    

    Personne.call(this,prenom,nom,pseudo),
    this.numeroClient=numeroClient,
    this.getInfos=function () {
        return this.numeroClient + ' ' +this.nom + ' ' +this.prenom
    }
}

var steeve=new Client('Steve','LUCAS','steve44','A01');
console.log(steeve.getInfos())
console.log(steeve.getInitiales())

