const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Input Bilangan : ", (number) => {
	resultPositiveNegativeNumber(number);
	rl.close();
});

const resultPositiveNegativeNumber = (number) => {
	if (number >= 0) {
		console.log(`Bilangan ${number} adalah bilangan positif`);
	} else {
		console.log(`Bilangan ${number} adalah bilangan negatif`);
	}
};
