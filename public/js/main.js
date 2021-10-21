// {{{{{{{{{{{{{{{{{{{{{{{{{{{{Import}}}}}}}}}}}}}}}}}}}}}}}}}}}}
import {Archer,Guerrier,Mage} from "./modules/Heroes.js";
import {Boss} from "./modules/boss.js";
import {Enigmes} from "./modules/boss.js";
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{Heroes}}}}}}}}}}}}}}}}}}}}}}}}}}}}
let archer = new Archer ("Arrow",100,100,0)
let guerrier = new Guerrier ("Destrock",100,100,0)
let mage = new Mage ("Merlin",100,100,0)
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{Boss}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
let sauron = new Boss ("Sauron",19,100)
let chronos = new Boss ("Chronos",100,100)
let lilith = new Boss ("Lilith",100,100)
let bosses =  [sauron,chronos,lilith]
// ----------------------------Enigmes-----------------------
let enigme1 = new Enigmes ("1","1")
let enigme2 = new Enigmes ("Q2","2")
let enigme3 = new Enigmes ("3","3")
let enigmes = [enigme1,enigme2,enigme3]

console.log(enigma());