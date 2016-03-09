$(document).ready(function(){
	console.log("hello");

var map = L.map('map').setView([47.613162,-122.3069227], 14);
//adding map
	
	
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var tileUrl = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png';
var tmAttrib='Map data © <a href="http://www.thunderforest.com/">Thunderforest</a> contributors';
var thunderLayer = new L.TileLayer(tileUrl, {maxZoom: 18}

);
var thUrl =	'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png';
var tmAtt='Map data © <a href="http://www.thunderforest.com/">Thunderforest</a> contributors';
var thunderLayer2 = new L.TileLayer(thUrl, {maxZoom: 18}
);

var mapLayers = {
    "Satellite": satLayer,
    "Open Street Maps": osm,
	"Outdoors": thunderLayer,
	"Elevation Map": thunderLayer2
};
//creating a variable for all 3 map layers you defined. 

L.control.layers(mapLayers).addTo(map);
osm.addTo(map);
//one by one adding layers or add all at once, as shown above
	
	var cupcakeIcon = L.icon({
    iconUrl: 'img/cupcake.png',
    shadowUrl: 'img/cupcake_shadow.png',

    iconSize:     [38, 40], // size of the icon
    shadowSize:   [33, 35], // size of the shadow
    iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 33],  // the same for the shadow
    popupAnchor:  [-3, -60] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([47.613162,-122.3069227],{icon: cupcakeIcon}).addTo(map);
marker.bindPopup("<b>Marlie's Magic Morsels</b><br>Flagship Store");
	
var marker2 = L.marker([47.614341,-122.313242],{icon: cupcakeIcon}).addTo(map);
marker.bindPopup("<b>Marlie's Magic Morsels</b><br>Our Biggest Vegan Selection");
	
var marker3 = L.marker([47.613509,-122.330145],{icon: cupcakeIcon}).addTo(map);
marker.bindPopup("<b>Marlie's Magic Morsels</b><br>Our Most Popular Store");
//adding markers to the map 
	
	
	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
	
	    // Form validation
     $('#order-form').validate({
         submitHandler: function(form){
             // If form is valid, submit it!
             form.submit();
			 
         },
         rules: {
             "your-name": {
                 required: true,
                 maxlength: 128
             },
             "your-state": {
                 required: true,
                 maxlength: 2
            },
             "your-zip": {
               required: true,
                 maxlength: 5,
                 digits: true
            },
             "card-holder-name": {
                 required: true,
                 maxlength: 128
             },
            "card-number": {
                 required: true,
                 creditcard: true
             },
             "cvv": {
                 required: true,
                 maxlength: 3,
                 digits: true
             }
         }
     });
    $('label span.glyphicon').tooltip();


});