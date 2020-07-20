let arabicNumbers = document.getElementById('numberInput');
let romanNumbers = document.getElementById('romanNumber');

arabicNumbers.addEventListener('input', (f) => {
	romanNumbers.value = convertToRoman(f.target.value);
});

function convertToRoman(num) {
	let romanToNumber = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	let result = '';

	if ((num <= 0 && num != '') || num > 4999) {
		alert('Incorrect input. Please insert a number from 1 to 4999');
		romanNumbers.className = 'failed';
		return 'Try Again';
	} else {
		for (let key in romanToNumber) {
			while (num >= romanToNumber[key]) {
				result += key;
				num -= romanToNumber[key];
			}
		}
	}

	romanNumbers.className = 'passed';
	return result;
}
