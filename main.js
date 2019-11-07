const Block = require('./block');
const BlockChain = require('./blockChain');

//Inicializa blockchain
let bloque = new BlockChain();
//Crean un nuevo bloque
bloque.agregarBloque(new Block('01/01/2018', { cantidad: 45 }));
bloque.agregarBloque(new Block('03/10/2018', { cantidad: 60 }));
bloque.agregarBloque(new Block('04/11/2018', { cantidad: 34 }));
//Muestra la cadena de bloque
console.log(JSON.stringify(bloque, null, 4));