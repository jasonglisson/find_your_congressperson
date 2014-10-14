jQuery(function() {

	jQuery('.zip-button').click(function() {
		var zipcode = jQuery('#zipcode-value').val();
		var ziplink = "find_congressperson_zip?zip=" + zipcode;	
		window.location.href = ziplink;
		return false;
	});

	jQuery('.address-button').click(function() {
		var address = jQuery('#address-value').val();
		var city = jQuery('#city-value').val();		
		var state = jQuery('#state-value').val();
		var zip = jQuery('#zipcode-value').val();				
		var readdress = address.replace(/\s/g, "+");		
		var addresslink = "find_congressperson_address?address=" + readdress + "+" + city + "+" + state + "+" + zip;	
		window.location.href = addresslink;
		return false;
	});

});