( function(window, google, MyProject) {
	
	MyProject.MAP_OPTIONS = {
		center: {
			lat: 50.059121,
			lng: 19.937889
		},
		zoom: 15,
		disableDefaultUI: false,
		scrollWheel: false,
		draggable: false, 
		mapTypeId: google.maps.MapTypeId.HYBRID,	// or .SATELLITE, .ROADMAP
        maxZoom: 16,
		minZoom: 14,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM, // or BOTTOM_LEFT, RIGHT_BOTTOM etc.
		    style: google.maps.ZoomControlStyle.SMALL //or  .DEFAULT
		},
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	};
	
}(window, google, window.MyProject || (window.MyProject = {})));