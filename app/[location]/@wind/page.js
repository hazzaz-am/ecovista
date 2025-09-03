import NoLocationFound from "@/components/NoLocationFound";
import WindComponent from "@/components/WindComponent";
import { getResolvedLocation } from "@/lib/location-info";

export default async function WindPage({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	const locationInfo = await getResolvedLocation(location, latitude, longitude);

	if (locationInfo?.lat && locationInfo?.lon) {
		return <WindComponent lat={latitude} lon={longitude} />;
	} else {
		return <NoLocationFound />;
	}
}
