'use strict';
$(function() {

	// Blog Mouse Move
	if ( $(window).width() > 767 || $(window).width() > $(window).height() ){
		$(".blog-slider").mThumbnailScroller({
			axis: "x",
			speed: 100,
			type: "hover-80",
			updateOnContentResize: true,
			markup:{ 
				thumbnailsContainer: ".blog-list",
				thumbnailContainer: ".blog-list > li"
			},
	        advanced:{
	            updateOnContentResize:true,
	            updateOnImageLoad:true,
	        }
		});
	}
});