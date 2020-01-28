var errorMessage = document.getElementById('errorMessage');
function formValidation(){
	return checkEmail() && checkCompanyName() && checkUsername() && checkPassword() && checkCompanyUrl();
}
function formInformation(){
	var email = document.getElementById('email').value;
	var companyName = document.getElementById('companyName').value;
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var companyUrl = document.getElementById('companyUrl').value;
	var consoleInformation = {email, companyName, username, password, companyUrl};
	console.log(consoleInformation);
	window.alert("The informations are stored in the console");
}
function checkEmail()
		   {
			 var email = document.getElementById('email');
			 validEmail = new RegExp("[a-z0-9]+@([a-z0-9]+\\.)+[a-z]+")
			if(validEmail.test(email.value.trim()) == false)
			{
				errorMessage.innerHTML = " The email is not valid";
				email.style.borderColor="red";
				document.getElementById('submitbtn').disabled=true;
				return false;
			}
			email.style.borderColor="green";
			document.getElementById('submitbtn').disabled=false;
			return true; 

		}
function checkCompanyName()
		{
			var companyName = document.getElementById('companyName');
			if(companyName.value.trim().length == 0)
			{
				errorMessage.innerHTML = "The company name is required";
				companyName.style.borderColor="red";
				document.getElementById('submitbtn').disabled=true;
				return false;
			}
			if(companyName.value.trim().length >60)
			{
				errorMessage.innerHTML = "The company name must not be longer than 60 characters";
				companyName.style.borderColor="red";
				document.getElementById('submitbtn').disabled=true;
				return false;
			}
			if(!isNaN(companyName.value))
			{
				errorMessage.innerHTML = "The company name is not valid ";
				companyName.style.borderColor="red";
				document.getElementById('submitbtn').disabled=true;
				return false;
			}
			    companyName.style.borderColor="green";
				document.getElementById('submitbtn').disabled=false;
			    return true;
			
       }
function checkUsername()
		{
			var username = document.getElementById('username');
			if(username.value.trim().length == 0)
			{
				errorMessage.innerHTML = "The username is required";
				username.style.borderColor="red";
				document.getElementById('submitbtn').disabled=true;
				return false;
			}
			    username.style.borderColor="green";
				document.getElementById('submitbtn').disabled=false;
				return true;
       }
function checkPassword()
		{
			var password = document.getElementById('password');
            validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
			
			if(!validPassword.test(password.value)) {
             errorMessage.innerHTML = " The password must be between 8 to 16 characters and it needs to contains at least one lowercase letter, one uppercase letter, one             numeric digit and one special character";
			 password.style.borderColor="red";
			 document.getElementById('submitbtn').disabled=true;
	         return false;
			}
			 password.style.borderColor="green";
			 document.getElementById('submitbtn').disabled=false;
             return true;
       }
function checkCompanyUrl()
		{
			var companyUrl = document.getElementById('companyUrl');
			if(companyUrl.value.trim().length == 0)
			{
				errorMessage.innerHTML = "The company url is required";
				companyUrl.style.borderColor="red";
				document.getElementById('submitbtn').disabled=true;
				return false;
			}
			    companyUrl.style.borderColor="green";
				document.getElementById('submitbtn').disabled=false;
				return true;
       }