import { POST_VENUE_URL } from "../constants.js";

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
