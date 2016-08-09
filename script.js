(function(window, google, MyProject) {
	
	// map options
	var options = MyProject.MAP_OPTIONS,
	element = document.getElementById('map-canvas'),
	// map
	map = new google.maps.Map(element, options);
}(window, google, window.MyProject || (window.MyProject = {})));