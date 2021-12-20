# `151` ObjectToArray-Part-3

## 📝 Instrucciones:

1. Escribe una función llamada `convertObjectToList` la cual convierte un objeto literal en un arreglo(array) de arreglos, como este: 

+ Argumento:

```Js
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
```
+ Valor Retornado:

```Js
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
```
Ten en cuenta que tu función debería poder manejar CUALQUIER objeto como este, no solo la muestra exacta proporcionada anteriormente.

Por ejemplo, también debería poder manejar este, o cualquier otro objeto que contenga simples pares key-value (llave-valor).

```Js
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}
```