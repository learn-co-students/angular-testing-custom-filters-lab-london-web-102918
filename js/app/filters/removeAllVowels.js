function removeAllVowels() {
	return string => {
		return string.replace(/[aeiou]/gi, '');
	};
}

angular
	.module('app')
	.filter('removeAllVowels', removeAllVowels);
