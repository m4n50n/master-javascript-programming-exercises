function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) { return 0; }

  let min;
  let nan = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) { console.log(arr[i]);
      min = (i === 0) ? arr[i] : arr[i] < min ? arr[i] : min;
    }
    else {
      nan++;
			console.log("na " + nan);
    }
  } 

  return (nan === arr.length) ? 0 : min;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4