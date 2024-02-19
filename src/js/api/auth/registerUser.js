import { REGISTER_USER_URL } from "../constants";

export async function registerUser(profile) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(REGISTER_USER_URL, options);
  const json = await respons.json();

  return json;
}
