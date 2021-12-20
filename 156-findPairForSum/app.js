function findPairForSum(array, number){
	for (i = 0; i < array.length; i++) {		
		for (c = 0; c < array.length; c++) {
			if (c != i && c + i == number) {
				return [i, c];
			}
		}
	}
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]