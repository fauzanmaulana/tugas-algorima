const oodNumbers = [];
let spacer = 0;

for (let i = 0; i < 38; i++) {
	if (i % 2 == 0) {
		console.log(i);
	} else {
		oodNumbers.push(i);
		spacer = spacer + 1;
	}

	if (i % 2 == 1) {
		console.log(oodNumbers);
	}
}
