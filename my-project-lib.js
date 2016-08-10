( function(window, google) {
	
	var MyProject = ( function() { // MyProject variable stores a function
		function MyProject(element, opts) {
			this.gMap = new google.maps.Map(element, opts);
		}
		MyProject.prototype = {
			// here's the place for functions I could like to add to multiple maps: 
			zoom: function(level) {
				if (level) {
					this.gMap.setZoom(level);
				} else {
					return this.gMap.setZoom();
				}
			},
			// events:
            _on: function(event, callback) { // with underscore it will stay private in the library
			    var self = this;
				// outside the callback 'this' is library
				// inside the callback 'this' is the map
				google.maps.event.addListener(this.gMap, event, function(e){
					callback.call(self, e);
				});
			},
			addMarker: function(lat, lng, draggable) {
				// draggable is additional functionality here...
				this._createMarker(lat, lng, draggable);
			},
        	_createMarker: function(lat, lng, draggable) {
				var opts = {
					position: {
						lat: lat,
						lng: lng
					},
					draggable: draggable,
					map: this.gMap
				};
				return new google.maps.Marker(opts);
			}		
		};		
		return MyProject; // end of module
	}());
	
	MyProject.create = function(element, opts) {
		return new MyProject(element, opts);
	}; // factory function, returns the instanxce of the object
	
	window.MyProject = MyProject; // MyProject is attached to the window
	
} (window, google));