import { GET_BOOKING_URL } from "../constants.js";

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