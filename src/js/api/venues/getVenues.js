import { GET_VENUES_URL } from "../constants.js";

export async function getVenues(limit, offset) {
  try {
    const response = await fetch(
      `${GET_VENUES_URL}?limit=${limit}&offset=${offset}&_bookings=true`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch venue data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: error.message };
  }
}
