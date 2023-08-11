function compute() {
	var p = document.getElementById('principal').value;
	var rate = document.getElementById('rate').value;
	var years = document.getElementById('years').value;
	var interest = (p * years * rate) / 100;
	var amount = parseInt(p) + parseFloat(interest);
	var result = document.getElementById('result');
	var current_year = new Date().getFullYear();
	var num_years = parseInt(years) + current_year;

	if (p <= 0) {
		alert('Please enter a positive number!');
		document.getElementById('principal').focus();
	} else {
		document.getElementById('result').innerHTML = 'If you deposit $' + '<mark>' + principal + '</mark>' + ',<br> at an interest rate of ' + '<mark>' + rate + '%' + '</mark>' + '<br> You will receive an amount of $' + '<mark>' + amount + '</mark>' + ',<br> in the year ' + '<mark>' + year + '</mark>' + '<br>';
	}
}

function updateRate() {
	var rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerHTML = rateval;
}
