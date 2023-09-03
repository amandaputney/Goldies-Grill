import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

// This function is never actually used, it's
// only  RESTful routing reminder
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}