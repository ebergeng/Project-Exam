import { POST_VENUE_URL } from "../constants.js";

/**
 * Fetches data for a specific venue by its unique identifier, including booking information.
 *
 * @param {string} venueId - The unique identifier of the venue to fetch.
 *
 * @returns {Promise<Object>} A promise that resolves with an object containing a success flag
 * and the data of the venue if the operation is successful, or a success flag set to false
 * and an error message if the operation fails.
 *
 * @throws {Error} Throws an error if the request fails or if the server response is not ok,
 * indicating the failure to fetch venue data.
 */

export async function createVenue(venue, token) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(venue),
  };
  try {
    const response = await fetch(`${POST_VENUE_URL}`, options);
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
