// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxh2AZtM0oLy69aEre1FOrUiff-tZ-DMFViroMwmGfk1_TXnbbJUifJcnDJX9rMRuE/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
