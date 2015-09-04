// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
     var customMapType = new google.maps.StyledMapType([
      {
      stylers: [
        { hue: "#000" },
        { saturation: -100 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 200 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 44.801800, lng: 20.463302},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var image = 'assets/images/map-ico.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 44.801800, lng: 20.463302},
    map: map,
    icon: image
  });
    map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}