import NoLocationFound from "@/components/NoLocationFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLocation } from "@/lib/location-info";

export default async function TemperaturePage({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	const locationInfo = await getResolvedLocation(location, latitude, longitude);

	if (locationInfo?.lat && locationInfo?.lon) {
		return <TemperatureComponent lat={latitude} lon={longitude} />;
	} else {
		return <NoLocationFound />;
	}
}
