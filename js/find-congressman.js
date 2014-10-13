jQuery(function() {

	jQuery('.zip-button').click(function() {
		var zipcode = jQuery('#zipcode-value').val();
		var ziplink = "find_congressman?zip=" + zipcode ;	
		window.location.href = ziplink;
		return false;
	});

});