import { GET_VENUES_URL } from "../constants.js";

export async function getVenue(venueId) {
  try {
    const response = await fetch(`${GET_VENUES_URL}/${venueId}?_bookings=true`);
    if (!response.ok) {
      throw new Error("Failed to fetch venue data.");
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
