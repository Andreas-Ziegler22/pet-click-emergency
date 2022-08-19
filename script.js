const btn = document.getElementById("btn");

btn.addEventListener("click", call);

function call() {
  document.getElementById("text").innerHTML = `calling...`;
}
