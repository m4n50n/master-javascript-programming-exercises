function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
	sentence = sentence.split(" ");
	
	let palindromes = [];
	for (index in sentence) {
		if (isPalindrome(sentence[index])) {
			palindromes.push(sentence[index]);
		}
	}
	
	palindromes = palindromes.sort((a, b) => {
		return b.length - a.length;
	})
	
	console.log(palindromes);
	
	return palindromes[0];	
}

function reverseString(string) {
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.split('').reverse().join('') === word;
}

console.log(findLongestPalindrome("My dad is a racecar athlete"));