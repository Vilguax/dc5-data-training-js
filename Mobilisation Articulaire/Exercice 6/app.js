class Rectangle {
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }
    getSurface() {
        return this.longueur * this.largeur;
    }
}
console.log(new Rectangle(5, 3).getSurface());