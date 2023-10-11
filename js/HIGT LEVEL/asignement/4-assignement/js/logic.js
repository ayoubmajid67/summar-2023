function FilterCityLists(UserCity) {
	ListsOfCity.forEach((city) => {
		if (city.textContent.indexOf(UserCity) > -1) {
			city.style.display = "block";
		} else {
			city.style.display = "none";
		}
	});
}
function FilterSidesLists() {
	citySides.forEach((Side) => {
		let VisibleListCounter = 0;

		for (let i = 1; i < Side.children.length; i++) {
			if (Side.children[i].style.display == "block") VisibleListCounter++;
		}

		if (VisibleListCounter > 0) Side.firstElementChild.style.display = "block";
		else Side.firstElementChild.style.display = "none";
	});
}

CitySearchInput.addEventListener("input", () => {
	let UserCity = CitySearchInput.value;

	FilterCityLists(UserCity);

	FilterSidesLists();
});

//show city container when the input become in focus :
CitySearchInput.addEventListener("focus", () => {
	cityContainer.style.display = "block";
});
