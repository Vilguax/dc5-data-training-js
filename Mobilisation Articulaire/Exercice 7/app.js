class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    circonferance() {
        return 2 * Math.PI * this.rayon;
    }
}
console.log(new Cercle(5).circonferance());