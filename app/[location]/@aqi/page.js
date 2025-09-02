import AQIComponent from "@/components/AQIComponent";

export default function AirQualityPage({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	return <AQIComponent lat={latitude} lon={longitude} />;
}
