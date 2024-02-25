import { GET_BOOKING_URL } from "../constants.js";

/**
 * Retrieves detailed information about a specific booking, including customer and venue details.
 *
 * This function sends a GET request to fetch details for a specific booking identified by its `id`.
 * It includes query parameters to also fetch associated customer and venue information along with the booking details.
 *
 * @param {string} id - The unique identifier of the booking to retrieve.
 * @param {string} token - The authentication token required to authorize the request.
 *
 * @returns {Promise<Object|null>} A promise that resolves with the detailed booking information
 * if the request is successful, or null if an error occurs during the request.
 *
 * @throws {Error} Throws an error if the network request fails or if the server response
 * is not ok, indicating a failure to fetch the booking details.
 */

export async function getBooking(id, token) {
  const url = `${GET_BOOKING_URL}/${id}?_customer=true&_venue=true`;

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
