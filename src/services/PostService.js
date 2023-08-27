import http from "./http";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const OAUTH_URL = process.env.REACT_APP_OAUTH_URL;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
export async function getPosts() {
  const url = `${BASE_URL}photos/random?client_id=${ACCESS_KEY}&count=30`;
  const { data } = await http.get(url);
  return data;
}

export async function getPost(id) {
  const url = `${BASE_URL}photos/${id}?client_id=${ACCESS_KEY}`;
  const { data } = await http.get(url);
  return data;
}

export async function searchPosts(query, page, color) {
  let url;
  if (color) {
    url = `${BASE_URL}search/photos?client_id=${ACCESS_KEY}&query=${query}&per_page=30&page=${page}&color=${color}`;
  } else {
    url = `${BASE_URL}search/photos?client_id=${ACCESS_KEY}&query=${query}&per_page=30&page=${page}`;
  }
  const { data } = await http.get(url);
  const { total_pages, results } = data;
  return { total_pages, results };
}

export async function getRelatedPosts(username) {
  const url = `${BASE_URL}users/${username}/photos?client_id=${ACCESS_KEY}`;
  const { data } = await http.get(url);
  return data;
}

export async function like(id) {
  const url = `${BASE_URL}/photos/${id}/like`;
  return await http.post(url, {});
}

export async function unlike(id) {
  const url = `${BASE_URL}/photos/${id}/like`;
  return await http.delete(url, {});
}

export async function getAuthCode(redirect_uri) {
  const response_type = "code";
  const scope = "public write_likes";
  // const redirect_uri = "urn:ietf:wg:oauth:2.0:oob";
  const url = `${OAUTH_URL}/authorize?client_id=${ACCESS_KEY}&response_type=${response_type}&scope=${scope}&redirect_uri=${redirect_uri}&state=picsomepic`;
  return await http.get(url);
}

export async function getToken(code, redirect_uri) {
  const url = `${OAUTH_URL}/token`;
  const data = {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    grant_type: "authorization_code",
    code,
    redirect_uri,
  };
  return await http.post(url, data);
}
