fetch(
  "https://api.unsplash.com/photos/random?orientation=landscape&query=horizon&q&auto=format&client_id=y33PIEJ7VVAxxNfTBFl3on5nwpUxi_LZpADm5Z2IcTw"
)
  .then((res) => res.json())
  .then((data) => {
    let backgroundImage = data.urls.full;
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = "url(images/delhi.jpg)";
  });
