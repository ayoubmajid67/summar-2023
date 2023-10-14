let loginApiUrl = "https://reqres.in/api/login";
let UserApiUrl = "https://reqres.in/api/users";

let loginToken = localStorage.getItem("userToken") || "";
let form = document.querySelector(".container form");
function userInfo(email, password) {
	this.email = email;
	this.password = password;
}

window.onload = function () {
	if (loginToken != "") {
		window.location.href = "https://ayoubmajid67.github.io/summar-2023/js/HIGT%20LEVEL/asignement/6-assignment%2017.1/html/home.html";
	}
};

function login(user) {
	axios
		.post(loginApiUrl, {
			email: user.email,
			password: user.password,
		})
		.then((response) => response.data)

		.then((Token) => {
			loginToken = Token.token;
			localStorage.setItem("userToken", loginToken);
			window.location.href = "https://ayoubmajid67.github.io/summar-2023/js/HIGT%20LEVEL/asignement/6-assignment%2017.1/html/home.html";
		})
		.catch((error) => {
			alert(error.response.data.error);
		});
}

//("tracey.ramos@reqres.in");

form.onsubmit = function () {
	event.preventDefault(); // Prevents the form from being submitted traditionally

	let formData = new FormData(event.target);

	let user = new userInfo(formData.get("email"), formData.get("password"));
	login(user);
};
