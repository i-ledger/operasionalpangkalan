// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwAQGOSegHQEozlGSL-KK85Wm76FER-_xNxiqLX_kp7CrQVia_RctmM4NWPa2qpxRqYkg/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
