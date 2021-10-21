// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Archer]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
export class Archer {
    constructor(nom, pv, pa, fleches) {
        this.nom = nom
        this.pv = pv
        this.pa = pa
        this.fleches = fleches
        this.defense(

        )
        this.attaque(

        )
    }

}
// {{{{{{{{{{{{{{{{{{{{{{{{{Guerrier}}}}}}}}}}}}}}}}}}}}}}}}}
export class Guerrier {
    constructor(nom, pv, pa, supra) {
        this.nom = nom
        this.pv = pv
        this.pa = pa
        this.supra=supra

        this.defense(

        )
        this.attaque(

        )
    }

}
// [[[[[[[[[[[[[[[[[[[[[[[[[[Mage]]]]]]]]]]]]]]]]]]]]]]]]]]
export class Mage {
    constructor(nom, pv, pa, mana) {
        this.nom = nom
        this.pv = pv
        this.pa = pa
        this.mana=mana

        this.defense(

        )
        this.attaque(

        )
    }
}