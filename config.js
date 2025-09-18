// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbz80tG3mW2bd6VEn_EryK-572rfd0LeeqNFkAtmIrZGfOHnICpHUO3FfhF14mPAPsguZQ/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
