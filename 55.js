function isPalindromic(n) {
	var s = '' + n;
	var size = s.length / 2;
	for (var i = 0; i < size; i++) {
		if (s[i] != s[s.length-i-1]) {
			return false;
		}
	}

	return true;
}

function isLychrel(n) {
	var iterations = 50;
	do {
		var reversedN = ('' + n).split('').reverse().join('');
		n += parseInt(reversedN);
	} while (!isPalindromic(n) && iterations--);

	if (iterations === 0 || !isPalindromic(n)) {
		return true;
	}

	return false;
}

console.log('isPalindromic:');
console.log('1 => ' + isPalindromic(1));
console.log('123 => ' + isPalindromic(123));
console.log('222 => ' + isPalindromic(222));
console.log('4444 => ' + isPalindromic(4444));
console.log('123454321 => ' + isPalindromic(123454321));
console.log('1234554321 => ' + isPalindromic(1234554321));

console.log('isLychrel:');
console.log('47 => ' + isLychrel(47));
console.log('349 => ' + isLychrel(349));
console.log('196 => ' + isLychrel(196));

var count = 0;
for (var i = 0; i < 10000; i++) {
	if (isLychrel(i)) {
		count += 1;
	}
}
console.log('count=' + count);
