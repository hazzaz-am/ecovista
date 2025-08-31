import data from "/location.json";


export function getLocations() {
	return data;
}

export function getLocationByName(countryName) {
	if (countryName.trim().length < 1) return null;

	const found = data.find(
		(location) => location.name.toLowerCase().includes(countryName.toLowerCase())
	);

	return found || {};
}
