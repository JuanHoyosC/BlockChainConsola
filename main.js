const Block = require('bloque.js');
const BlockChain = require('blockChain.js');

//Inicializa blockchain
let bloque = new BlockChain();
//Crean un nuevo bloque
bloque.agregarBloque(new Block('01/01/2018', { cantidad: 45 }));
bloque.agregarBloque(new Block('01/01/2019', { cantidad: 5 }));
//Muestra la cadena de bloque

console.log(JSON.stringify(bloque, null, 4));
console.log(bloque.validarChain());
bloque.chain[2].datos = {cantidad:47};
console.log(bloque.validarChain());