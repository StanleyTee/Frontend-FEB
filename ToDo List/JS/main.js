function get(){
    var username = localStorage.getItem("username");
    document.getElementById("message").innerHTML = `<h3> Welcome, ${username} </h3>`
}
window.onload = function(){
	get();
}

function validate(addForm) {
	if (document.getElementById("title").value.length == 0) {
		alert("Invalid Title");
	}
	return true;
}
