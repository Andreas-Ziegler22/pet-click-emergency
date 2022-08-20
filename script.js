const btn = document.getElementById("btn");
const local = document.getElementById("myLocal");

btn.addEventListener("click", call);
btn.addEventListener("click", getLocation);

function call() {
  document.getElementById("text").innerHTML = `calling...`;
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    local.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  local.innerHTML = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude} `;
}
