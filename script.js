(function(window, /*google, I can remove google with my-project library */ MyProject) {
	
	// map options
	var options = MyProject.MAP_OPTIONS,
	element = document.getElementById('map-canvas'),
	// map
	map = MyProject.create(element, options); // using my-project-lib.js factory. I could use it's gMap later on like this:
	// map.gMap.setZoom(18);	
	// but in my-project-lib.js I add zoom function in MyProject.prototype, so:
	map.zoom(18);	
	// without lib would be: 
	// map = new google.maps.Map(element, options);
	
	// events:
	// google.maps.event.addListener(map.gMap, 'click', function(){
	// alert('click!');
    // });
	
	// the same with my-project-lib.js:
	map._on('click', function(){
		alert('click!');
	});
	
	map._on('dragend', function(){
		alert('done dragging!');
	});
	
	// markers:
	//
	// var marker = new google.maps.Marker({
	//    position: {
	//		lat: 50.059492,
	//		lng: 19.935369
	//	},
	//	map: map.gMap,
	//	icon: 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/kanzeldach.png'
	// });
	// with my-project-lib.js:
	map.addMarker(50.059492, 19.935369, true); // true = draggable
	map.addMarker(50.059221, 19.939084, true);
	map.addMarker(50.058546, 19.936856, true);
	
		
}(window, /* google, */ window.MyProject || (window.MyProject = {})));
