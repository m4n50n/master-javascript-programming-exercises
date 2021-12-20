# `68` extend

## 📝 Instrucciones:

1. Escribe una función llamada `extend`.

Dados dos objetos, `extend` añade propiedades del segundo objeto al primero.

## :bulb: Pista:

* Añade cualquier key que no esté en el primer objeto (`obj1`).

* Si el primer objeto (`obj1`) ya tiene la key dada, ignóralo (no sobre escribas el valor de la propiedad).

* No modifiques para nada el segundo objeto (`obj2`).

```Javascript
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};


extend(obj1, obj2);


console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
```