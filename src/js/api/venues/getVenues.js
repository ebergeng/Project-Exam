import { GET_VENUES_URL } from "../constants.js";

/**
 * Retrieves a list of venues with pagination and booking information.
 *
 * This function fetches a list of venues, including details about their bookings,
 * with support for pagination through limit and offset parameters.
 *
 * @param {number} limit - The maximum number of venues to return in the response.
 * @param {number} offset - The number of venues to skip before starting to collect
 * the response set.
 *
 * @returns {Promise<Object>} A promise that resolves with the list of venues and their
 * booking information if the fetch is successful. The promise resolves to an object
 * with a `success` property set to `false` and an `error` message if the fetch fails.
 *
 * @throws {Error} Throws an error if the request for venues fails or if the server
 * response is not ok, encapsulating the reason for failure.
 */

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
