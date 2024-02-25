import { PROFILE_URL } from "../constants.js";

/**
 * Fetches the booking details for a user, including venue information.
 *
 * This function sends a GET request to retrieve all bookings made by the specified
 * user. It appends a query parameter to include venue information for each booking.
 *
 * @param {string} userName - The username of the user whose bookings are being requested.
 * @param {string} token - The authentication token required to authorize the request.
 *
 * @returns {Promise<Object|null>} A promise that resolves with the booking data if the
 * fetch is successful, or null if an error occurs during the request.
 *
 * @throws {Error} Throws an error if the network request fails or if the server response
 * is not ok, indicating a failure to fetch booking data.
 */

export async function getBookings(userName, token) {
  const url = `${PROFILE_URL}/${userName}/bookings?_venue=true`;
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
      throw new Error("Network Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching error: ", error);
    return null;
  }
}
