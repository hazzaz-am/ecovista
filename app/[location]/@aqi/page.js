import AQIComponent from "@/components/AQIComponent";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLocation } from "@/lib/location-info";

export default async function AirQualityPage({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	const locationInfo = await getResolvedLocation(location, latitude, longitude);

	if (locationInfo?.lat && locationInfo?.lon) {
		return <AQIComponent lat={latitude} lon={longitude} />;
	} else {
		return <NoLocationFound />;
	}
}
