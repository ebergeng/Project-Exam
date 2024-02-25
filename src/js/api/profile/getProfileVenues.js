import { PROFILE_URL } from "../constants.js";

/**
 * Fetches the list of venues associated with a user's profile.
 *
 * This function retrieves the venues associated with a specific user's profile,
 * including booking information, by making a GET request to the server. The userName
 * is used to construct the URL for the user's profile venues endpoint.
 *
 * @param {string} userName - The username of the profile whose venues are being requested.
 * @param {string} token - The authentication token required to authorize the request.
 *
 * @returns {Promise<Object>} A promise that resolves with the venues data if the request is
 * successful, or an object containing a success flag set to false and an error message if
 * the request fails.
 *
 * @throws {Error} Throws an error if the network request fails or if the server response is
 * not ok, indicating a failure to fetch the venue data.
 */

export async function getProfileVenues(userName, token) {
  const url = `${PROFILE_URL}/${userName}/venues?_bookings=true`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch venue data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: error.message };
  }
}
