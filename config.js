// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxjkeSTSkeJA-x_u6oVI7-vd3cdryqm7T6AfEebBpRb-3plZrk6XAZSMDpPDXFcN3M7rw/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
