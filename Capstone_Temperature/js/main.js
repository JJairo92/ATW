$(document).ready(function() {
	// Xively API Key
	xively.setKey("Ee0iO4FAXRWTyGnoYOzr4XjSu4DH2m1Di370gnBTmWPL23fL");

	// Gets feed content
	xively.feed.get("1502428704", function(data) {
		console.log("The room's temperature is: " + data.datastreams[0].current_value); // Logs the feed title
		var temperature = data.datastreams[0].current_value;
		// Sets and updates value in realtime
		$("#datastream-value").xively('live', {feed: 1502428704, datastream: 'capstone_temperature'});

		if(temperature <= 76) { // if temperature is 74 degrees or lower, the cool.css will be used making the background white and changing the gif to a fan with gray blades
			$("#css").attr("href", "css/cool.css");
			$("#temp_image").attr("src", "images/cool.gif");
		} else if(temperature == 77) { // if temperature is between 79 and 75 degrees, the hot_cool.css will be used making the background green and changing the gif to a fan with orange blades
			$("#css").attr("href", "css/hot_cool.css");
			$("#temp_image").attr("src", "images/hot_cool.gif");
		} else if(temperature >= 78) { // if temperature is 80 degrees or higher, the sunny.css will be used making the background orange and changing the gif to a sun
			$("#css").attr("href", "css/sunny.css");
			$("#temp_image").attr("src", "images/sunny.gif");
		}
	});
});