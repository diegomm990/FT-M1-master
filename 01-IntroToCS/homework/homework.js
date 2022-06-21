'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let valor = 0;
  for (let i = 0; i < num.length; i++) {
    valor += num[i] * (2 ** (num.length - 1 - i));
  }
  return valor;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = (num % 2).toString();
  for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
  }
  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}