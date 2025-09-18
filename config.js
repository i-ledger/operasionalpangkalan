// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycby4mx9Y1y27ydGlunBz5yZEX8H7swgNCs2D1RWqDpupGiKoFm7vzR-txmKmuaD8sMTXFg/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
