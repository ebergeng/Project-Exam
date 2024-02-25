import { BOOK_VENUE_URL } from "../constants.js";

/**
 * Submits a booking request for a venue.
 *
 * This function sends a POST request with the booking details to the server. It includes
 * the booking information in the request body and requires an authorization token in the
 * request headers. The server is expected to process this booking and return a response
 * containing the booking details if successful.
 *
 * @param {Object} booking - An object containing the details of the booking to be made. The
 * structure of this object will depend on the server's expected format, typically including
 * details like the venue ID, booking date, time, and possibly user-specific information.
 * @param {string} token - The authentication token required to authorize the request. This
 * is typically obtained after a user logs in to the system.
 *
 * @returns {Promise<Object|null>} A promise that resolves with the details of the booked
 * venue if the request is successful, or null if an error occurs during the request.
 *
 * @throws {Error} Throws an error if the network request fails or if the server responds
 * with a status indicating that the request was unsuccessful, indicating a failure to book
 * the venue.
 */

export async function bookVenue(booking, token) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(booking),
  };
  try {
    const response = await fetch(`${BOOK_VENUE_URL}`, options);
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
