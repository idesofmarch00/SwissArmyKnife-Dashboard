document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get({ savedLinks: [] }, (result) => {
    const linksContainer = document.getElementById("links");
    result.savedLinks.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.url;
      a.target = "_blank";
      linksContainer.appendChild(a);
    });
  });
});
