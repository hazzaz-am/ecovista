export async function getLocationData(lat, lon) {
	try {
		const response = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error.message);
	}
}

export async function getAllLocationList() {
	try {
		const response = await fetch(`http://localhost:3000/api/location`);
		const data = await response.json();
		return data;
	} catch (e) {
		console.error(e.message);
	}
}

export async function getLocationInformation(locationName) {
	try {
		const response = await fetch(
			`http://localhost:3000/api/location/${locationName}`
		);
		const data = await response.json();
		return data;
	} catch (e) {
		console.error(e.message);
	}
}

export async function getResolvedLocation(location, lat, lon) {
	try {
		if (lat && lon) {
			return { lat, lon };
		}

		const locationData = await getLocationInformation(location);

		if (locationData.latitude && locationData.longitude) {
			const lat = locationData.latitude;
			const lon = locationData.longitude;

			return {
				lat,
				lon,
			};
		}
	} catch (error) {
		console.error(error.message);
	}
}
