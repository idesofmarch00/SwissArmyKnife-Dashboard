/**
 * DOM elements for displaying cryptocurrency data
 */
const coinImage = document.getElementById("coinImage");
const coinName = document.getElementById("coinName");
const currentPrice = document.getElementById("currentPrice");
const dayHigh = document.getElementById("dayHigh");
const dayLow = document.getElementById("dayLow");

/**
 * Fetches the latest Bitcoin data from the CoinGecko API and updates the DOM elements.
 */
function cryptoTicker() {
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      coinImage.src = data.image.small;
      coinName.textContent = data.name;
      currentPrice.textContent = `Current price: ${data.market_data.current_price.inr} INR`;
      dayHigh.textContent = `24-hour High: ${data.market_data.high_24h.inr} INR`;
      dayLow.textContent = `24-hour Low: ${data.market_data.low_24h.inr} INR`;
    })
    .catch((err) => {
      console.error(err);
      coinName.textContent = "";
      currentPrice.textContent = "Failed to load data";
      dayHigh.textContent = "";
      dayLow.textContent = "";
    });
}

/**
 * Sets an interval to update the cryptocurrency data every 60 minutes (3,600,000 milliseconds).
 */
setInterval(cryptoTicker, 3600000);
