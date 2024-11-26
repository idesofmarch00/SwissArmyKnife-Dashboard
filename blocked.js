/* global window, document, URLSearchParams */
const url = new URLSearchParams(window.location.search).get("url");
if (url) {
  document.getElementById("url").textContent = url; // Only set if url is present
} else {
  document.getElementById("url").textContent = "No URL provided"; // Handle missing URL
}
