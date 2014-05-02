var map = L.map('map').setView([33, -80.09], 9);

L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(map);




$.each(locations, function(i,v){
	var obj = v;
	var marker = L.marker([obj.lat, obj.lng]).addTo(map)
		.bindPopup(obj.name +"<br>"+obj.stnid+"<br>"+obj.wl);
})



$.ajax({
   type: 'GET',
    url: 'http://tidesandcurrents.noaa.gov/cgi-bin/map2/odinmap.cgi?type=TidePredictions&nelat=33.6249380644144&nelng=-78.55192871093749&swlat=31.946362981720455&swlng=-80.99638671874999&mode=jsonp&callback=df',
    async: true,    
    dataType: 'json',
    success: function(json) {
       console.dir(json);
    },
    error: function(e) {
       console.log(e.message);
    }
});