import { PROFILE_URL } from "../constants.js";

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
