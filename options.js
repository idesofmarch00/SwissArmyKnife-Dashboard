"use strict";

/* global chrome, window, document */

const blockedList = document.getElementById("blocked-list");
const resolutionSelect = document.getElementById("resolution-select");
const enabledToggle = document.getElementById("enabled-toggle");

blockedList.placeholder = [
  "facebook.com",
  "instagram.com",
  "youtube.com",
  "!google.com",
  "twitter.com",
  "reddit.com",
  "!reddit.com/r/webdev",
].join("\n");

blockedList.addEventListener("change", (event) => {
  const blocked = event.target.value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  chrome.storage.local.set({ blocked });
});

resolutionSelect.addEventListener("change", (event) => {
  const resolution = event.target.value;

  chrome.storage.local.set({ resolution });
});

enabledToggle.addEventListener("change", (event) => {
  const enabled = event.target.checked;

  chrome.storage.local.set({ enabled });
});

document.getElementById("reminder-time").addEventListener("change", (event) => {
  const reminderTime = parseInt(event.target.value, 10);
  chrome.storage.local.set({ reminderTime });
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(
    ["enabled", "blocked", "resolution"],
    function (local) {
      const { enabled, blocked, resolution } = local;
      if (!Array.isArray(blocked)) {
        blocked = []; // Ensure blocked is an array
      }
      blockedList.value = blocked.join("\n"); // Set the blocked list
      resolutionSelect.value = resolution || SHOW_BLOCKED_INFO_PAGE; // Default to SHOW_BLOCKED_INFO_PAGE if not set
      enabledToggle.checked = enabled !== undefined ? enabled : false; // Default to false if not set
      document.body.classList.add("ready");
    }
  );
});
