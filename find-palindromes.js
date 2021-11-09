/**
 * Requirements:
 * ================================
 * - Output the number of words that are Palindromes in the "words" string array given as the only argument.
 *      Palindromes are words that are the same no matter if one starts reading from the front or the back,
 *      e.g. "Anna" or "Ebbe" or "Tacocat": https://en.wikipedia.org/wiki/Palindrome
 *
 * - The return value of this function is a number.
 *
 * - Capitalization within the words does not matter, so AnnA, aNnA or annA are all counted as Palindromes.
 *
 * - The input array can be empty, but it is always defined.
 *
 * - Each entry in the words array is either an empty line, or one word built from the latin letters from A-Z and a-z - it does not contain any
 *      spaces or special characters. Empty lines are not counted as palindromes.
 *
 * - If a word is in the input array twice it is only counted once as a palindrome, even if the capitalization of the two
 *      entries is different (so ['Anna', 'ANNA', 'aNNa'] is still only 1 palindrome)
 *
 * - You can implement additional helper functions or use additional npm packages if you want - but the "app.js" must not be changed.
 */

function findPalindromes(words) {
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].toLowerCase();
	}
	const palindromesArray = removeEmptyString(words);
	const removeDuplicates = [...new Set(palindromesArray)];
	return removeDuplicates.filter(isPalindrome).length;
}

// function to check if string is palindrome
const isPalindrome = (word) => {
	let reversedWord = word.split('').reverse().join('');
	return word === reversedWord;
};

// function to remove empty string from array
const removeEmptyString = (array) => {
	return array.filter((item) => item !== '');
};

module.exports = findPalindromes;
