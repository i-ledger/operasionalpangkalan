// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbw1CBG9Gth2MC42SdFYfgQNRWyEukY1dae74nDdDc6nKVOXkmawAH8o8wgKFnq7xueZyg/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
