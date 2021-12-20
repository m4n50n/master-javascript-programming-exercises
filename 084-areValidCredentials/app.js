function areValidCredentials(one, two) {
    if (one.length > 3 && two >= 8) { return true; }
    return false;
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero