


function getHistory(){
	return document.getElementById("history-value").innerText;
}
function History(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function Output(number){
	if(number==""){
		document.getElementById("output-value").innerText=number;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(number);
	}	
}
function getFormattedNumber(number){
	if(number=="-"){
		return "";
	}
	let num = Number(number);
	let output = num.toLocaleString("en");
	return output;
}
function reverseNumber(number){
	return Number(number.replace(/,/g,''));
}
let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			History("");
			Output("");
		}
		else if(this.id=="backspace"){
			let output=reverseNumber(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				Output(output);
			}
		}
		else{
			let output=getOutput();
			let history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumber(output);
				history=history+output;
				if(this.id=="="){
					let result=eval(history);
					Output(result);
					History("");
				}
				else{
					history=history+this.id;
					History(history);
					Output("");
				}
			}
		}
	});
}
let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output=reverseNumber(getOutput());
		if(output!=NaN){
			output=output+this.id;
			Output(output);
		}
	});
}
