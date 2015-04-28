// not finished
function f(n) {
	var count = 0;
	for (var c = 4; c <= n; c+=2) {
		console.log(c);
	for (var b = 3; b <= c; b++) {
	for (var a = c-b; a <= b; a++) {
		if (a+b>c && b+c>a) {
			var m = Math.sqrt((2*b*b + 2*a*a - c*c)/4);
			if (m % 1 === 0) {
				count++;
			}
		}
	}}}
	return count;
}

console.log(f(10) + ' == 3?');
console.log(f(50) + ' == 165?');
console.log(f(100000) + ' == ?');
