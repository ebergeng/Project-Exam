import { BOOK_VENUE_URL } from "../constants.js";

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
