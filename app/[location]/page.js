import LocationInfo from "@/components/LocationInfo";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLocation } from "@/lib/location-info";

export default async function LocationPage({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	const locationInfo = await getResolvedLocation(location, latitude, longitude);

	if (locationInfo?.lat && locationInfo?.lon) {
		return <LocationInfo lat={latitude} lon={longitude} />;
	} else {
		return <NoLocationFound />;
	}
}
