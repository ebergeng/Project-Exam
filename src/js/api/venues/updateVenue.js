import { POST_VENUE_URL } from "../constants.js";

/**
 * Updates the details of an existing venue by its ID.
 *
 * @param {Object} venue - The updated details of the venue. Must be an object that matches
 * the expected schema for a venue's details.
 * @param {string} id - The unique identifier of the venue to be updated.
 * @param {string} token - The authentication token required to authorize the update operation.
 *
 * @returns {Promise<Object|null>} A promise that resolves with the updated venue details
 * if the update is successful, or null if an error occurs.
 *
 * @throws {Error} Throws an error if the request to the server fails or if the server
 * response is not ok.
 */
export async function updateVenue(venue, id, token) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify(venue),
  };
  try {
    const response = await fetch(`${POST_VENUE_URL}/${id}`, options);
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
