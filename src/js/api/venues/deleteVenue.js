import { POST_VENUE_URL } from "../constants.js";

/**
 * Deletes a specific venue by its ID.
 *
 * This function sends a DELETE request to remove a venue identified by its unique ID.
 * Authorization is required to perform this operation, indicated by a bearer token.
 *
 * @param {string} id - The unique identifier of the venue to be deleted.
 * @param {string} token - The bearer token required for authorization to delete the venue.
 *
 * @returns {Promise<Response>} A promise that resolves to the raw response object from
 * the fetch operation. This allows the caller to handle the response status directly.
 *
 * @throws {Error} Throws an error if the fetch operation itself fails, for instance,
 * due to network issues. Note that this does not handle HTTP errors related to the
 * response status, which should be handled by the caller.
 */

export async function deleteVenue(id, token) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  };
  try {
    const response = await fetch(`${POST_VENUE_URL}/${id}`, options);
    return response;
  } catch (error) {
    console.error("Fetching error: ", error);
    return null;
  }
}
