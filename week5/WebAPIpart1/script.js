const x = document.getElementById("demo");
const map = document.getElementById("map");
//

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  map.innerHTML =`<iframe src="https://maps.google.com/maps?q= ${position.coords.latitude}, ${position.coords.longitude}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`

}