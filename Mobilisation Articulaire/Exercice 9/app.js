class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    presentation() {
        return "Bonjour, je m'appelle " + this.nom + " " + this.prenom + " et j'ai " + this.age + " ans.";
    }
}
console.log(new Personne("PELASSA", "Axel", 22).presentation());
console.log(new Personne("PONTANIER", "Guillaume", 23).presentation());
console.log(new Personne("FERNANDEZ", "Hugo", 22).presentation());