let titles = document.querySelectorAll("h1");

function changeVisibility(index) {
	return new Promise((resolve) => {
		setTimeout(() => {
			titles[index].style.visibility = "visible";
			resolve(index);
		}, 1000);
	});
}

async function ChangeTitlesVisibility() {
	for (let i = 0; i < titles.length; i++) {
		await changeVisibility(i);
	}
}

ChangeTitlesVisibility();
