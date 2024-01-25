import { GET_VENUES_URL } from "../constants.js";

export async function getVenues() {
  //const sortQueryParam = sort ? `sort=${sort}` : '';
  //const url = `${GET_VENUES_URL}?&limit=${limit}&offset=${offset}`
  const respons = await fetch(GET_VENUES_URL);
  const json = await respons.json();
  return json;
}
