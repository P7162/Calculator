



function getOutputValue() {
	return document.getElementById("output-value").innerText;
}

function Output(number) {
	if (number == "") {
		document.getElementById("output-value").innerText = number;
	}
	else {
		document.getElementById("output-value").innerText = getFormattedNumberValue(number);
	}
}

function getHistoryValue() {
	return document.getElementById("history-value").innerText;
}

function History(num) {
	document.getElementById("history-value").innerText = num;
}

function getFormattedNumberValue(number) {
	if (number == "-") {
		return "";
	}
	let num = Number(number);
	let output = num.toLocaleString("en");
	return output;
}

function getReverseNumber(number) {
	return Number(number.replace(/,/g, ''));
}

let output = document.getElementsByClassName("operator");

for (let i = 0; i < output.length; i++) {
	output[i].addEventListener('click', function () {
		if (this.id == "clear") {
			History("");
			Output("");
		}
		else if (this.id == "backspace") {
			let output = getReverseNumber(getOutputValue()).toString();
			if (output) {
				output = output.substr(0, output.length - 1);
				Output(output);
			}
		}
		else {
			let result = getOutputValue();
			let past = getHistoryValue();
			if (result == "" && past != "") {
				if (isNaN(past[past.length - 1])) {
					past = past.substr(0, past.length - 1);
				}
			}
			if (result != "" || past != "") {
				result = result == "" ? result : getReverseNumber(result);
				past = past + result;
				if (this.id == "=") {
					let result = eval(past);
					Output(result);
					History("");
				}
				else {
					past = past + this.id;
					History(past);
					Output("");
				}
			}
		}
	});
}

let num = document.getElementsByClassName("number");
for (let i = 0; i < num.length; i++) {
	num[i].addEventListener('click', function () {
		let output = getReverseNumber(getOutputValue());
		if (output != NaN) {
			output = output + this.id;
			Output(output);
		}
	});
}

