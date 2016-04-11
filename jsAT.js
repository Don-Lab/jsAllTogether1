//Javascript file for jsAllTogether.html

function input(){
var name = prompt("Hello", "Name");
document.getElementById("prompt").innerHTML = "Hello " + name;
};

function choice(){
if (confirm("Click ok or cancel") == true) {
	document.getElementById("confirm").innerHTML = "OK is confirmed";
}
else {
	document.getElementById("confirm").innerHTML = "Cancel is confirmed";
}
};

function lnbr() {
	alert(" line 1\n line 2\n ")
}

function valid() {
	var name = document.forms["mainForm"]["formName"].value;
	if (name == null || name == "") {
		alert("Need name");
		return false;
	}
	
	var email = document.forms["mainForm"]["formName"].value;
	if (name == null || name == "") {
		alert("Need email");
		return false;
	}
}

var today;
switch(new Date().getDay()) {
	case 0:
		today = "Sunday"
		break;
	
	case 1:
		today = "Monday"
		break;
	
	case 2:
		today = "Tuesday"
		break;
	
	case 3:
		today = "Wednesday"
		break;
		
	case 4:
		today = "Thursday"
		break;
		
	case 5:
		today = "Friday"
		break;
		
	case 6:
		today = "Saturday"
		break;
		
	default:
		today = "a day!"
		break;
}
document.getElementById("switchDate").innerHTML = "Today is " + today;

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var n = new Date().getDay();
document.getElementById("arrayDay").innerHTML = day[n]