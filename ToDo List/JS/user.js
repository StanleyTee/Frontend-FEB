if (document.getElementById("username").value == " ") {
	alert("Enter username");
}else{
function storeUserName() {
	sessionStorage.setItem("username",document.getElementById("username").value);
	}
}
