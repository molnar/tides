var map = L.map('map').setView([33, -80.09], 9);

L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(map);




$.each(locations, function(i,v){
	var obj = v;
	var marker = L.marker([obj.lat, obj.lng]).addTo(map);
})