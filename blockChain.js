const Block = require('./block');
class BlockChain {
    constructor() {
        chain = [this.crearBloqueGenesis()];
        dificultad = 2
    }

    //Crea el primer bloque (Bloque Genesis)
    crearBloqueGenesis() {
        return new Block('01/01/2018', 'Bloque Genesis', '');
    }

    //Obtiene el ultimo bloque agregado
    getUltimoBloque() {
        return this.chain[this.chain.length - 1];
    }

    //Agrega un nuevo bloque a la cadena
    agregarBloque(nuevoBloque) {
        nuevoBloque.hashAnterior = this.getUltimoBloque().hash;
        nuevoBloque.hash = nuevoBloque.minarBloque(this.dificultad);
        this.chain.push(nuevoBloque);
    }

    validarChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const bloqueActual = this.chain[i];
            const bloqueAnterior = this.chain[i - 1];

            if (bloqueActual.hash != bloqueActual.calcularHash()) {
                return false;
            }

            if (bloqueActual.hashAnterior != bloqueAnterior.hash) {
                return false;
            }

        }
        return true;
    }
}

module.exports = BlockChain