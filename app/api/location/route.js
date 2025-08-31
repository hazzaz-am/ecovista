import { getLocations } from "./location";

export async function GET() {
	const locationData = getLocations();
	return Response.json(locationData);
}
