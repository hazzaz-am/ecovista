import NoLocationFound from "@/components/NoLocationFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLocation } from "@/lib/location-info";

export default async function WeatherPage({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	const locationInfo = await getResolvedLocation(location, latitude, longitude);

	if (locationInfo?.lat && locationInfo?.lon) {
		return <WeatherComponent lat={latitude} lon={longitude} />;
	} else {
		return <NoLocationFound />;
	}
}
