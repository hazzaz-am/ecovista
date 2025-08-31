import { getLocationByName } from "../location";

export async function GET(_request, { params }) {
	const locationData = getLocationByName(params?.name);
	return Response.json(locationData);
}
