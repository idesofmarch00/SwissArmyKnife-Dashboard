document.getElementById("save-link").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    chrome.storage.local.get({ savedLinks: [] }, (result) => {
      const savedLinks = result.savedLinks;
      savedLinks.push({ url, lastOpened: Date.now() });
      chrome.storage.local.set({ savedLinks }, () => {
        // Show toast message
        const toast = document.createElement("div");
        toast.textContent = "Link saved!";
        toast.style.position = "fixed";
        toast.style.bottom = "10px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "#333";
        toast.style.color = "#fff";
        toast.style.padding = "10px";
        toast.style.borderRadius = "5px";
        toast.style.zIndex = "1000";
        document.body.appendChild(toast);

        setTimeout(() => {
          toast.remove();
          // Route to view links page
          chrome.tabs.create({ url: "links.html" });
        }, 1000);
      });
    });
  });
});

document.getElementById("view-links").addEventListener("click", () => {
  chrome.tabs.create({ url: "links.html" });
});

document.getElementById("options-links").addEventListener("click", () => {
  chrome.tabs.create({ url: "options.html" });
});
