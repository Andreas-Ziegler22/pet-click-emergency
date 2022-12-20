const btn = document.getElementById("btn");
const local = document.getElementById("myLocal");
/**
 It was a nice fight
 I was trying to do:
 btn.addEventListener("click", call,getLocation);
 as I understood addEventListener support only one function;-)
 */
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
/**
 todo list:

 I need to find the way to call a phone number when I press the button(for this project
   version I am happy with the phone number display)

 get list of emergency numbers for animals

 the closest emergency number in relation to my geolocation

 */
