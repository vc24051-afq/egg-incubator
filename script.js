const channelID = "3200960";
const readAPIKey = "ZC4JC5CDF97FKVBC";

const url = `https://api.thingspeak.com/channels/${channelID}/feeds/last.json?api_key=${readAPIKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("temp").innerHTML =
      data.field1 + " °C";

    document.getElementById("hum").innerHTML =
      data.field2 + " %";
  })
  .catch(error => {
    console.error("Error:", error);
  });
