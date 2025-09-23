// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxyW07kNot1GMBUi_l8aGEQZFgk8tQJUXsLuR2LCOd2i8E9u-bhPqPKKR3M0tyFpbj29g/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
