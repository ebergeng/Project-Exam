import { GET_VENUES_URL } from "../constants.js";

export async function getVenues(limit, offset) {
  try {
    const response = await fetch(
      `${GET_VENUES_URL}?limit=${limit}&offset=${offset}&_bookings=true`,
    );
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

export async function FetchAllVenues() {}
