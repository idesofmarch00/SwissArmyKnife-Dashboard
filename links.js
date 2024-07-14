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
