import { results } from "./data.js";

function isEmptyString(str) {
	return str === "";
}

function convertUsdToGel(usdPrice, exchangeRate) {
	return usdPrice * exchangeRate;
}

function getCountryByCurrency(currencyCode) {
	switch (currencyCode) {
		case "USD":
			return "United States";
		case "EUR":
			return "European Union";
		case "GEL":
			return "Georgia";
		default:
			return "Unknown currency";
	}
}

function convertToLowercase(str) {
	return str.toLowerCase();
}

function getNumbersOver100(numbersArray) {
	return numbersArray.filter((number) => {
		return number > 100;
	});
}

function getCheapestCountryName(resultsArray) {
	if (resultsArray.length === 0) {
		return null;
	}

	let cheapestObj = resultsArray[0];

	resultsArray.forEach((element) => {
		if (element.content.flightQuotes.cheapest.rawPrice < cheapestObj.content.flightQuotes.cheapest.rawPrice) {
			cheapestObj = element;
		}
	});

	return cheapestObj.content.location.name;
}

function findObjectById(array, searchString) {
	return array.find((element) => {
		return element.id === searchString;
	});
}

console.log(isEmptyString(""));
console.log(convertUsdToGel(100, 2.7));
console.log(getCountryByCurrency("EUR"));
console.log(convertToLowercase("MY NAME IS JANE"));
console.log(getNumbersOver100([50, 105, 12, 200, 99]));
console.log(getCheapestCountryName(results));
console.log(findObjectById(results, "location-29475257"));
