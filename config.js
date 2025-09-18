// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwbPmpDRT8FDD9uu4F4244R63Y7V2mdvXtK40YL4APKGGyukTUD_LoL0PQXF-bDpOCQDg/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
