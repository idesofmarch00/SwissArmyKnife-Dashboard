document.getElementById("save-link").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    chrome.storage.local.get({ savedLinks: [] }, (result) => {
      const savedLinks = result.savedLinks;
      savedLinks.push({ url, lastOpened: Date.now() });
      chrome.storage.local.set({ savedLinks });
    });
  });
});

document.getElementById("view-links").addEventListener("click", () => {
  chrome.tabs.create({ url: "links.html" });
});
