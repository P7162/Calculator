function getOutputValue() {
	return document.getElementById("output-value").innerText; // Return value from display-box
}

function output(number) { //function to display output in formatted manner
	if (number == "") { //Handling the base case: if box is empty, display number as it is
		document.getElementById("output-value").innerText = number;
	} else { //Else, call getFormattedNumberValue function and format the entered number
		document.getElementById("output-value").innerText = getFormattedNumberValue(number);
	}
}

function getHistoryValue() { //Function to retrive previous Output
	return document.getElementById("history-value").innerText; //Get value from if "history-value"
}

function history(num) { // Function to set history value
	document.getElementById("history-value").innerText = num; //Set history value to num
}

function getFormattedNumberValue(number) { //Function to format numbers
	if (number == "-") { // Handling base case, i.e. if num == "-", do nothing
		return "";
	}
	let num = Number(number); //COnverting the input to number type
	let output = num.toLocaleString("en"); // Changing number to locale string of english
	return output; //Returns the iutput
}

function getReverseNumber(number) {
	return Number(number.replace(/,/g, '')); // Function to reverse the given number
}

let output = document.getElementsByClassName("operator"); // Get value stored in "Operator" class

for (let i = 0; i < output.length; i++) {
	output[i].addEventListener('click', function () { //Add click event listener to the members of "operator" class
		if (this.id == "clear") { // Defining task of clear function
			History(""); //Clears history
			Output(""); //Clears output
		} else if (this.id == "backspace") { //Defining work of "backspace" key
			let output = getReverseNumber(getOutputValue()).toString(); //reverse current output
			if (output) {
				output = output.substr(0, output.length - 1); //Removes lastmost character from reversed string i.e first number from number in output display
				Output(output); //Sends number to output
			}
		} else {
			let result = getOutputValue(); //Stores Output value
			let past = getHistoryValue(); //Stores history value
			if (result == "" && past != "") { //Handling base case: if current result is empty/null and past is not
				if (isNaN(past[past.length - 1])) { //if past-1 was null/empty
					past = past.substr(0, past.length - 1); //set past to following
				}
			}
			if (result != "" || past != "") { //Either case for above condition
				result = result == "" ? result : getReverseNumber(result);
				past = past + result;
				if (this.id == "=") { //If current element is "="
					let result = eval(past); //Evaluate string on screen
					Output(result); //Display the result as output
					History(""); //Set history to ""
				} else {
					past = past + this.id; //Add current id to past
					History(past); //set past to history
					Output(""); // set output yo null
				}
			}
		}
	});
}

let num = document.getElementsByClassName("number"); // If the pressed button is muber
for (let i = 0; i < num.length; i++) { //Simply display them in output box and concat them into a string for evaluation
	num[i].addEventListener('click', function () {
		let output = getReverseNumber(getOutputValue());
		if (output != NaN) {
			output = output + this.id;
			Output(output);
		}
	});
}