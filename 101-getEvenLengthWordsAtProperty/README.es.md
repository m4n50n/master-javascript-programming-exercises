# `101` getEvenLengthWordsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getEvenLengthWordsAtProperty`.

Dado un objeto y una key, `getEvenLengthWordsAtProperty` regresa un array que contenga todos los elementos de palabra, cuyo length es par del array localizado en la key dada.

## 💡 Pista:

* Si el array está vacío, debe regresar un array vacío.

* Si no contiene ningún elemento cuyo length es par, debe regresar un array vacío.

* Si la propiedad en la key dada, no es un array, debe regresar un array vacío.

* Si no hay propiedad en la key, debe regresar un array vacío.

## Resultado esperado:

```js
var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
```