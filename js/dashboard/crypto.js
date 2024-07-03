const coinImage = document.getElementById("coinImage");
const coinName = document.getElementById("coinName");
const currentPrice = document.getElementById("currentPrice");
const dayHigh = document.getElementById("dayHigh");
const dayLow = document.getElementById("dayLow");

function cryptoTicker() {
  fetch("https://api.coingecko.com/api/v3/coins/loopring")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      coinImage.src = data.image.small;
      coinName.textContent = data.name;
      currentPrice.textContent = `Current price: ${data.market_data.current_price.inr} INR`;
      dayHigh.textContent = `24-hour High: ${data.market_data.high_24h.inr} INR`;
      dayLow.textContent = `24-hour Low: ${data.market_data.low_24h.inr} INR`;
    })
    .catch((err) => {
      console.error(err);
      coinName.textContent = "Failed to load data";
      currentPrice.textContent = "";
      dayHigh.textContent = "";
      dayLow.textContent = "";
    });
}

setInterval(cryptoTicker, 1000);
