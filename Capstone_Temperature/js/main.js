$(document).ready(function() {
	// Xively API Key
	xively.setKey("Ee0iO4FAXRWTyGnoYOzr4XjSu4DH2m1Di370gnBTmWPL23fL");

	// Gets feed content
	xively.feed.get("1502428704", function(data) {
		console.log("The room's temperature is: " + data.datastreams[0].current_value); // Logs the feed title
		var temperature = data.datastreams[0].current_value;
		// Sets and updates value in realtime
		$("#datastream-value").xively('live', {feed: 1502428704, datastream: 'capstone_temperature'});

		if(temperature <= 74 && temperature >= 70) {
			$("#css").attr("href", "css/cool.css");
			$("#temp_image").attr("src", "images/sunny.gif");
		} else if(temperature <= 79 && temperature >= 75) {
			$("#css").attr("href", "css/hot_cool.css");
			$("#temp_image").attr("src", "images/hot_cool.gif");
		} else if(temperature <= 85 && temperature >= 80) {
			$("#css").attr("href", "css/sunny.css");
			$("#temp_image").attr("src", "images/cool.gif");
		}
	});
});