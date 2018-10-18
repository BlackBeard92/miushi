var linkMap = document.querySelector(".contacts__link-map");

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
});

var centerMap = [59.938631, 30.323055];

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (w > 1299) {
  centerMap = [59.938938, 30.319149]
}

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
      center: centerMap,
      zoom: 17
  }),

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: "ул. Большая Конюшенная, д. 19/8",
    balloonContent: "text"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/map-pin.png",
    iconImageSize: [124, 106],
    iconImageOffset: [-62, -106]
})

  myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(myPlacemark);
});
