import { GET_VENUES_URL } from "../constants.js";

export async function getVenue(venuId) {
  try {
    const response = await fetch(`${GET_VENUES_URL}/${venuId}?_bookings=true`);
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching error: ", error);
    return null;
  }
}
