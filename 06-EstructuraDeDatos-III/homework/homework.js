"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function(value) {
  if(!this.value){
    this.root = new BinarySearchTree(value);
  }
  if(value < this.value){
    if(!this.left){
      this.left = new BinarySearchTree(value);
    }else {
      this.left.insert(value);
}  }
  if(value >= this.value){
    if(!this.right) {
      this.right = new BinarySearchTree(value);
    }else {
      this.right.insert(value);
    }
}
}
BinarySearchTree.prototype.size = function() {
  if(!this.value) return 0;
  if(!this.left && !this.right) return 1;
  if(this.left && !this.right) return 1 + this.left.size();
  if(this.right && !this.left) return 1 + this.right.size();
  if(this.left && this.right) return 1 + this.left.size() + this.right.size();
}
BinarySearchTree.prototype.contains = function(value) {
  if(this.value === value) {
    return true;
  }else if(value > this.value){
    if(!this.right) {
      return false;
    } else {
       return this.right.contains(value);
      }
  }else if(value < this.value){
    if(!this.left) {
      return false;
    }else {
      return this.left.contains(value);
    }
  }
}
BinarySearchTree.prototype.depthFirstForEach = function(fn, order) {
  switch (order) {
    case 'pre-order':
      fn(this.value);
      if(this.left) this.left.depthFirstForEach(fn, order);
      if(this.right) this.right.depthFirstForEach(fn,order);
      break;
  
    case 'post-order':
      if(this.left) this.left.depthFirstForEach(fn,order);
      if(this.right) this.right.depthFirstForEach(fn,order);
      fn(this.value);
      break;
  
    default:
      if(this.left) this.left.depthFirstForEach(fn,order);
      fn(this.value);      
      if(this.right) this.right.depthFirstForEach(fn,order);
      break;
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(fn,array=[]) {
  if(this.left) array.push(this.left);
  if(this.right) array.push(this.right);
  fn(this.value);
  if(array.length > 0){
    array.shift().breadthFirstForEach(fn,array)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
