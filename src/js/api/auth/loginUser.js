import { LOGIN_URL } from "../constants.js";

export async function loginUser(profile) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(LOGIN_URL, options);
  const json = await respons.json();
  return json;
}
