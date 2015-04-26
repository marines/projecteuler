
var digits = [319, 680, 180, 690, 129, 620, 762, 689, 762, 318, 368, 710, 720, 710, 629, 168, 160, 689, 716, 731, 736, 729, 316, 729, 729, 710, 769, 290, 719, 680, 318, 389, 162, 289, 162, 718, 729, 319, 790, 680, 890, 362, 319, 760, 316, 729, 380, 319, 728, 716];

function pincodeApplies(pincode, digits) {
	var i = 0;
	var j = 0;
	for (; i < pincode.length && j < digits.length; i++) {
		if (pincode[i] === digits[j]) {
			j++;
		}
	}

	if (j === digits.length) {
		return true;
	}

	return false;
}

function placeDigitsInPasscode(pincode, digits) {
	if (digits.length === 0) {
		return pincode;
	}

	for (var i = 0; i < pincode.length; i++) {
		if (pincode[i] === '' + digits[0]) {
			return pincode.slice(0, i+1) + placeDigitsInPasscode(pincode.slice(i+1), digits.slice(1));
		}
	}
	
	return digits[0] + placeDigitsInPasscode(pincode, digits.slice(1));
}

// 7319680
// 7316980
// 73162980
// 73162890
var pincode = '73162890';

for (var i = 0; i < digits.length; i++) {
	var input = '' + digits[i];
	if (!pincodeApplies(pincode, input)) {
		console.log('need to insert ' + input + ' into pincode (' + pincode + ')');
		pincode = placeDigitsInPasscode(pincode, input);
	}
}

console.log('pincode=' + pincode);
