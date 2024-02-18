import { POST_VENUE_URL } from "../constants.js";

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
