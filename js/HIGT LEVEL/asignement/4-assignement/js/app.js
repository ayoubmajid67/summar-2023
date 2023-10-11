const today = new Date();
const dateStr = today.toDateString();
let PrayerTimeUrl = "https://api.aladhan.com/v1/timingsByCity?&country=Morocco&method=3&city=";
function setCityInfoToDom(City) {
	CitySearchInput.value = City;
	cityContainer.style.display = "none";
	CityHeader.innerText = City;
	DayHeader.innerText = dateStr;
	FilterCityLists(City);
	FilterSidesLists();
}

function setPrayerTimesToDom(PrayerTimes) {
	PrayerTimesDomHeaders.Fajr.innerHTML = PrayerTimes.Fajr;
	PrayerTimesDomHeaders.Sunrise.innerHTML = PrayerTimes.Sunrise;
	PrayerTimesDomHeaders.Aduher.innerHTML = PrayerTimes.Dhuhr;
	PrayerTimesDomHeaders.Asr.innerHTML = PrayerTimes.Asr;
	PrayerTimesDomHeaders.Maghrib.innerHTML = PrayerTimes.Maghrib;
	PrayerTimesDomHeaders.Isha.innerHTML = PrayerTimes.Isha;
}
function GetCityPrayerTime(City) {
	setCityInfoToDom(City);
	axios
		.get(PrayerTimeUrl + City)
		.then((response) => response.data)
		.then((data) => {
			const PrayerTimes = data.data.timings;
			setPrayerTimesToDom(PrayerTimes);
		})
        .catch((error) => {
            console.error("Axios error:", error);
          });
}
