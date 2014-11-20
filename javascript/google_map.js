var stavanger = new google.maps.LatLng(22.322207, 91.811819);


// starting the function initialize
function initialize(){
  
  // To initialize a Map, we first create a Map properties object to define some properties for the map:
  var mapProp = {
    center: stavanger,
    zoom:17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    // ROADMAP (normal, default 2D map)
    // SATELLITE (photographic map)
    // HYBRID (photographic map + roads and city names)
    // TERRAIN (map with mountains, rivers, etc.)
  };
  
  var googleMap = document.getElementById("googleMap");
  var map = new google.maps.Map(googleMap,mapProp);
  
  var marker_stavanger=new google.maps.Marker({
      position: stavanger,
      animation:google.maps.Animation.BOUNCE
    }
  );
  marker_stavanger.setMap(map);


} // end of the function initialize

//google.maps.event.addDomListener(window, 'load', initialize);

window.onload = function(){
  initialize();
};