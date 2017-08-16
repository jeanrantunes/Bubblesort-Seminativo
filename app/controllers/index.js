var self = this;
Array.prototype.bubblesort = function() {
	var done = false;
	while (! done) {
		done = true;
		for (var i = 1; i < this.length; i++) {
			if (this[i - 1] > this[i]) {
				done = false;
				var tmp = this[i - 1];
				this[i - 1] = this[i];
				this[i] = tmp;
			}
		}
	}
	return this;
}

this.geraVector = function(size) {
	var vector = [];
	for(var i = size; i > 0; i--) {
		vector.push(i);
	}
	return vector;
}

var activity = Titanium.Android.currentActivity;
var start;

Ti.Android.currentActivity.onCreate = function(e){
	start = new Date().getTime();
   	var array = self.geraVector(100000);

   	array.bubblesort();

   	var win = Ti.UI.createWindow({
		backgroundColor: 'white',
		exitOnClose: true
	});

   	var scrollView = Ti.UI.createScrollView({
   		showVerticalScrollIndicator: true,
   		height: '90%',
  		width: '90%',
  		color: 'black',
  		value: array.toString()
   	});

	var explanationView = Ti.UI.createTextArea({
	    enabled: false, 
	    editable: false, 
	    color: 'black', 
	    horizontalWrap: false,
	    value: array.toString(),
	    top: 20,
  		scrollable:true
	});

	scrollView.add(explanationView);
	win.add(scrollView);
	win.open();
	win.addEventListener('postlayout', function(){
        var currentTime = (new Date().getTime() - start)/1000;
		var toast = Ti.UI.createNotification({
		    message:   "" + currentTime,
		    duration: 4000
		});
		toast.show();
    });
};


