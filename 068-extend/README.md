# `68` Extend

## 📝 Instructions:

1. Write a function called `extend`.

Given 2 objects, `extend` adds the properties of the 2nd object to the first one.

## :bulb: Hint:

* Add any key that is not on the first object (`obj1`).

* If the first object (`obj1`) already has the given key, ignore it(don't override the property value). 

* Don't modify the second object (`obj2`).

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