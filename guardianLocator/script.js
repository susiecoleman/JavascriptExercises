function initMap() {
  var guardian = {lat: 51.534946, lng: -0.121700,};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: guardian
  });
  var marker = new google.maps.Marker({
    position: guardian,
    map: map
  });
};
