const SHA256 = require ('crypto-js/sha256');
class Block {

    constructor(timeStamp, datos, hashAnterior = '') {
        this.timeStamp = timeStamp;
        this.datos = datos;
        this.hashAnterior = hashAnterior;
        this.comodin = 0
        this.hash = this.calcularHash();
    }

    //Calcula el Hash del bloque
    calcularHash() {
        return SHA256(this.timeStamp + JSON.stringify(this.datos) + this.hashAnterior + this.comodin).toString();
    }

    minarBloque(dificultad){
        while(this.hash.substring(0,dificultad) !== Array(dificultad + 1).join('0')){
            this.comodin++;
            this.hash = this.calcularHash();
        }
    }
}

module.exports = Block