function isEitherEvenOrAreBoth7(num1, num2) {
    if (espar(num1) || espar(num2)) {
        return true;
    }

    return false;
}
function espar(num) {
    if (num % 2 == 0) {
        return true;
    }

    return false;
}

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true