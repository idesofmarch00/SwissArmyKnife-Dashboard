document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get({ savedLinks: [] }, (result) => {
    const linksContainer = document.getElementById("links");
    result.savedLinks.forEach((link, index) => {
      const linkItem = document.createElement("div");
      linkItem.className = "link-item";

      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.url;
      a.target = "_blank";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = "&times;";
      deleteBtn.addEventListener("click", () => {
        if (
          confirm(
            "Are you sure you want to delete this link? You won't be able to recover it again."
          )
        ) {
          deleteLink(index);
        }
      });

      linkItem.appendChild(a);
      linkItem.appendChild(deleteBtn);
      linksContainer.appendChild(linkItem);
    });
  });

  document
    .getElementById("export-links")
    .addEventListener("click", exportLinks);
  document.getElementById("import-links-btn").addEventListener("click", () => {
    document.getElementById("import-links").click();
  });
  document
    .getElementById("import-links")
    .addEventListener("change", importLinks);
});

function deleteLink(index) {
  chrome.storage.local.get({ savedLinks: [] }, (result) => {
    const savedLinks = result.savedLinks;
    savedLinks.splice(index, 1);
    chrome.storage.local.set({ savedLinks }, () => {
      location.reload(); // Reload the page to reflect the changes
    });
  });
}

function exportLinks() {
  chrome.storage.local.get({ savedLinks: [] }, (result) => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(result.savedLinks));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "saved_links.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}

function importLinks(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const importedLinks = JSON.parse(e.target.result);
      chrome.storage.local.get({ savedLinks: [] }, (result) => {
        const savedLinks = result.savedLinks.concat(importedLinks);
        chrome.storage.local.set({ savedLinks }, () => {
          location.reload(); // Reload the page to reflect the changes
        });
      });
    };
    reader.readAsText(file);
  }
}
