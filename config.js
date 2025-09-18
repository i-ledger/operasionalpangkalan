// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwROWN5aWcz8EUXxjzcrVF5EdnbqXnDENTUCM42ro-QTxsuS-HYs0_saOS8PRToqCqoew/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
