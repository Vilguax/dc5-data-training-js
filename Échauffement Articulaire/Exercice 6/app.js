function nombrePremier() {
    for (let i = 1; i <= 50; i++) {
        let nombrePremier = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                nombrePremier = false;
            }
        }
        if (nombrePremier) {
            console.log(i);
        }
    }
}
nombrePremier();