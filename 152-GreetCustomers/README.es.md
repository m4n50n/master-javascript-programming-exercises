# `152` GreetCustomers

## 📝 Instrucciones:

Escribe una función llamada `greetCustomer`.

Dado un nombre, `greetCustomer` devuelve un saludo en función de cuántas veces ese cliente ha visitado el restaurante. Estudia el objeto `customerData`.

El saludo debe ser diferente, dependiendo del nombre en su reserva.

+ Caso 1 - Cliente desconocido (El nombre no se encuentra en el customerData ):
```Js
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
```

+ Caso 2 - Cliente que ha visitado solo una vez (el valor de `visits` es `1`):

```Js
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
```

+ Caso 3 - Cliente repetido: (el valor de `visits` es mayor que `1`):

```Js
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
```

## 💡 Pista:

* Su función no debe alterar el objeto `customerData` para actualizar el número de visitas.

* No programes con los datos de muestra exactos. Es una MALA IDEA 😩 :

```Js
if (firstName === 'Joe') {
  // do something
}
```