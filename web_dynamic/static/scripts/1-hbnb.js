$(function() {
    const selectedAmenities = {};
    $(".amenity").change(function() {
        var amenityId = $(this).data('amenity-id');
        
        if ($(this).prop('checked')) {
            selectedAmenities[amenityId] = true;
        } else {
            delete selectedAmenities[amenityId];
        }
        
        var selectedAmenitiesText = Object.keys(selectedAmenities).map(function(amenityId) {
            return "Amenity " + amenityId;
        }).join(', ');

        $('.Amenities h4').text("Selected Amenities: " + selectedAmenitiesText);
    });
});
