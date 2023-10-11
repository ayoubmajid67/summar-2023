let CitySearchInput = document.getElementById("searchCityInput");
let ListsOfCity = document.querySelectorAll("#ListOfCity  li");
let citySidesName = document.querySelectorAll("#ListOfCity h4");
let citySides = document.querySelectorAll("#ListOfCity ul");

let cityContainer = document.getElementById("ListOfCity");

let PrayerTimesDomHeaders = {
	Sunrise: document.querySelector(".Sunrise h1"),
	Fajr: document.querySelector(".Fajr h1"),
	Aduher: document.querySelector(".Aduher h1"),
	Asr: document.querySelector(".Asr h1"),
	Maghrib: document.querySelector(".Maghrib h1"),
	Isha: document.querySelector(".Isha h1"),
};

let CityHeader = document.querySelector(".headContainer h1");
let DayHeader = document.querySelector(".headContainer h4");

// list of city source :https://www.marefa.org/قائمة_مدن_المغرب
