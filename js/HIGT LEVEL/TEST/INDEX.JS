let loginUrl = "https://reqres.in/api/login";
let UserUrl = "https://reqres.in/api/users";
let registerUrl = "https://reqres.in/api/register";

let loginToken = localStorage.getItem("userToken") || "";

let bodyPrams = {
	email: "tracey.ramos@reqres.in",
	password: "cityslickda",
};

async function login() {
	try {
		let response = await axios.post(loginUrl, bodyPrams);

		let token = response.data;
		console.log(token);
		localStorage.setItem("userToken", token.token);
	} catch (error) {
		console.log("Error : ", error.message);
	}
}

let headers = {
	Authorization: "Bearer " + loginToken,
};

let UserINfo = {
	name: "majid",
	job: "leader",
};
async function createNewUser() {
	try {
		let response = await axios.post(UserUrl, UserINfo, headers);

		let newUserInfo = response.data;
		console.log(newUserInfo);
	} catch (error) {
		console.log("Error : ", error.message);
	}
}

async function register() {
	try {
		let response = await axios.post(registerUrl, bodyPrams);

		let registerInfo = response.data;
		console.log(registerInfo);
	console.log("token : ", registerInfo.token);
		localStorage.setItem("userToken", registerInfo.token);
	} catch (error) {
		console.log("Error : ", error.message);
	}
}

async function main() {
	console.log("\nRegister new user : ");
	await register();

	console.log("\nlogin to my created account  : ");
	await login();

	console.log("\ncreate a new user using my token : ");
	await createNewUser();
}

main();
