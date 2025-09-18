// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxYKnAoBDkIyM9P3cf-gRWUZUWdlu6kvW6L33KLV1lw-fezDmWseDtQQdzqzY5Oys0BCA/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
