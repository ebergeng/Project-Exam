import { GET_VENUES_URL } from "../constants.js";

/**
 * Retrieves detailed information for a specific venue, including its booking details.
 *
 * This function makes a request to fetch detailed information about a single venue
 * identified by its unique ID. The response includes booking details for the venue.
 *
 * @param {string} venueId - The unique identifier for the venue whose details are to be fetched.
 *
 * @returns {Promise<Object>} A promise that resolves to an object. If the fetch is successful,
 * the object will contain a `success` property set to `true` and a `data` property containing
 * the venue details. If the fetch fails, the object will contain a `success` property set to
 * `false` and an `error` property with the error message.
 *
 * @throws {Error} Throws an error if the request fails or if the server response is not ok,
 * indicating that the fetch operation was unsuccessful.
 */

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
