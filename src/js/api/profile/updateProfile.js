import { PROFILE_URL } from "../constants.js";

/**
 * Updates the avatar for a user's profile.
 *
 * This function updates the avatar image of a user's profile by sending a PUT request
 * to the server. It uses the userName to construct the URL for the user's profile
 * media update endpoint.
 *
 * @param {string} userName - The username of the profile to be updated.
 * @param {Object} avatar - The new avatar data to be uploaded. This should be an object
 * containing the avatar information, structured according to the API's expectations.
 * @param {string} token - The authentication token required to authorize the update operation.
 *
 * @returns {Promise<Object|null>} A promise that resolves with the updated profile data
 * if the update is successful, or null if an error occurs during the request.
 *
 * @throws {Error} Throws an error if the network request fails or if the server
 * response is not ok, indicating a failure to update the profile.
 */

export async function updateProfile(userName, avatar, token) {
  const url = `${PROFILE_URL}/${userName}/media`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "put",
    body: JSON.stringify(avatar),
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
