//incializar variáveis 
let nomeHeroi = 'Tiago';
let expHeroi = 9901;


if (expHeroi <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro")
} else if (expHeroi >= 1001 && expHeroi <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze")
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata")
} else if (expHeroi >= 5001 && expHeroi <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro")
} else if (expHeroi >= 7000 && expHeroi <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina")
} else if (expHeroi >= 8001 && expHeroi <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente")
} else if (expHeroi >= 9001 && expHeroi <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal")
} else { 
    console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante") 
}
