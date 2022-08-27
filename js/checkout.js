
// Exercise 7
function validate() {
	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fLastN = document.getElementById("fLastN").value;
	var fEmail = document.getElementById("fEmail").value;
	var fPassword = document.getElementById("fPassword").value;
	var fAddress = document.getElementById("fAddress").value;
	var fPhone = document.getElementById("fPhone").value;

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email

	//Tots els camps són obligatoris i han de tenir almenys 3 caràcters:

	if(fName === "" || fName.length < 3){ 
		error++;
		document.getElementById("fName").style.border = "2px solid red";
		errorName.style.display = "block";
	}
	
	if(fLastN === "" || fLastN.length < 3){ 
		error++;
		document.getElementById("fLastN").style.border = "2px solid red";
		errorLastN.style.display = "block";
	}

	if(fEmail === "" || fEmail<3){
		error++;
		document.getElementById("fEmail").style.border = "2px solid red";
		errorEmail.style.display = "block";
	}

	if(fAddress === "" || fAddress<3){
		error++;
		document.getElementById("fAddress").style.border = "2px solid red";
		errorAddress.style.display = "block";
	}
	if(fLastN === "" || fLastN<3){
		error++;
		document.getElementById("fLastN").style.border = "2px solid red";
		errorLastN.style.display = "block";
	}
	if(fPassword === "" || fPassword<3){
		error++;
		document.getElementById("fPassword").style.border = "2px solid red";
		errorPassword.style.display = "block";
	}
	if(fPhone === "" || fPhone<3){
		error++;
		document.getElementById("fPhone").style.border = "2px solid red";
		errorPhone.style.display = "block";
	}

	// El nom i cognoms han de contenir només lletres.

	let letters = /^[A-Za-z]+$/;

	if (!fName.match(letters)) {
		error++;
		document.getElementById("fName").style.border = "2px solid red";
		errorName.style.display = 'block';
		alert("Your first name cannot contain numbers");
	} else if (!fLastN.match(letters)) {
		error++;
		document.getElementById("fLastN").style.border = "2px solid red";
		errorLastN.style.display = 'block';
		alert("Your last name cannot contain numbers.");
	}

	// El telèfon ha de contenir només números
	let numbers = /^[0-9]+$/;

	if (!fPhone.match(numbers)) {
		error++;
		document.getElementById("fPhone").style.border = "2px solid red";
		errorPhone.style.display = 'block';
		alert("Error al telèfon");
	}

	// La contrasenya ha d'incloure números i lletres

	if (!fPassword.match(numbers)) {
		error++;
		document.getElementById("fPassword").style.border = "2px solid red";
		errorPassword.style.display = 'block';
		alert("Your password must contain at least one number.");
	} else if (!fPassword.match(letters)) {
		error++;
		document.getElementById("fPassword").style.border = "2px solid red";
		errorPassword.style.display = 'block';
		alert("Your password must contain at least one letter.");
	}

	// L'email ha de tenir format d'email
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!fEmail.match(emailRegex)) {
		error++;
		document.getElementById("fEmail").style.border = "2px solid red";
		errorEmail.style.display = 'block';
		alert("Your mail must have a valid format.");
	}

	console.log("Errors: " + error);

}