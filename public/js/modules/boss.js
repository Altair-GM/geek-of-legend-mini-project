export class Boss {
    constructor(nom, pv, pa) {
        this.nom = nom
        this.pv = pv
        this.pa = pa

        // this.enigma = (pv, ) => {
        //     if (pv <= 20) {
        //         enigme = prompt("Question")

        //     } else if (enigme == ("rep")) {
        //         pv = 0
        //         alert("Vous avez battue le boss")
        //     }
        // }

    }
}

export class Enigmes {
    constructor(qs, rep) {
        this.qs = qs
        this.rep = rep
        this.enigma = (enigmes,shek) => {

            var rand = Math.floor(Math.random() * enigmes.length);
            var shek = enigmes[rand];
            console.log(shek)

        }

    }

}