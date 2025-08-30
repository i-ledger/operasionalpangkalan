// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzPiL35pDJkU4xgvfZ1HHyrBYcDW7UvwCO3tpMan1qVIdrju5stu-8C60wI8gGPvb9WEw/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
