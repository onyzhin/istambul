(function($) {

	var scroller=jQuery.browser.webkit ? "body": "html";

	/* modernize */
	function modernize() {
		// placeholder 
		if(!Modernizr.input.placeholder){
			$('[placeholder]').each(function() {
				$(this).watermark($(this).attr('placeholder'));
			});
		}
	}

	/** String formatter allows to do like this
	/* "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
	**/
	if (!String.prototype.format) {
	    String.prototype.format = function() {
	        var args = arguments;
	        return this.replace(/{(\d+)}/g, function(match, number) {
	            return typeof args[number] != 'undefined' ? args[number] : match;
	        });
	    };
	 }

	 //USAGE: $("#form").serializefiles();
	$.fn.serializefiles = function() {
	    var obj = $(this);
	    /* ADD FILE TO PARAM AJAX */
	    var formData = new FormData();
	    $.each($(obj).find("input[type='file']"), function(i, tag) {
	        $.each($(tag)[0].files, function(i, file) {
	            formData.append(tag.name, file);
	        });
	    });
	    var params = $(obj).serializeArray();
	    $.each(params, function (i, val) {
	        formData.append(val.name, val.value);
	    });
	    return formData;
	};


	/* scrollUp */
	function scrollUp(block,targetBlock) {
		$(block).click(function(e){
			var target = $(targetBlock).offset().top;
			$(scroller).animate({scrollTop:target},800);
			return false;
			e.preventDefault();
		});
	}

	function sliderInit(){
		$('.mainSlider-gallery').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: true,
			appendDots:$('.mainSlider .controls-cell'),
		});
		
	}
	
	function navbartoggle(){
		$('.navbar-toggle').click(function(){
			var navbar = $('.navbar-collapse');
			if($(this).is('.active')){
				$(this).removeClass('active');
				navbar.stop().slideUp().removeClass('active');
			}
			else{
				$(this).addClass('active');
				navbar.stop().slideDown().addClass('active');
			}
			return false;
		});
	}
	function slickInit(){
		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  arrows: false,
		  centerMode: false,
		  centerPadding:'0px',
		  focusOnSelect: true
		});
		var filtered = false;
		$('.js-filter').on('click', function(){
			var $filter = $(this).data('filter');
		  if (filtered === false) {
			$('.filtering').slick('slickFilter',$filter);
			filtered = true;
		  } else {
			$('.filtering').slick('slickUnfilter');
			filtered = false; 
		  }
		});
				
	}

	function galleryLink(){
		$('.gallery-link').fancybox({
			padding: [0,0,0,0],
			openEffect: 'elastic',
			closeEffect: 'elastic',
			prevEffect: 'fade',
			nextEffect: 'fade',
			openSpeed: 350,
			closeSpeed: 350,
			nextSpeed: 500,
			prevSpeed: 500,
			mouseWheel: true,
			 tpl: {
				wrap: '<div class="fancybox-wrap gallerypopup" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
			}
		});
	}
	
	function isotopeInit(){
		var filters = {};
		$('.photographer-gallery-tags .e').click(function(){
		  var $this = $(this);
		  var $grid = $('.slider-nav .slick-track');
		  // get group key
		  var $buttonGroup = $this.parent();
		  var filterGroup = $buttonGroup.attr('data-filter-group');
		  // set filter for group
		  filters[ filterGroup ] = $this.attr('data-filter');
		  // combine filters
		  var filterValue = concatValues( filters );
		  console.log(filters);
		  $grid.isotope({ filter: filters });
		});		
	}
	
	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
			value += obj[ prop ];
		}
		return value;
	}
	
	$(document).ready(function(){
		modernize();
		sliderInit();
		navbartoggle();
		slickInit();
		galleryLink();
		$('.footer_placeholder').height($('.footer').outerHeight());

			
		$('form.edit-account-form').submit(function(e){
		    //stop std action
		    e.stopPropagation();
		    e.preventDefault();
		    //send data
		    $.ajax({
		        type : 'POST',
		        url : $(this).attr('action'),
		        data : $(this).serializefiles(),
		        processData: false,
		        contentType: false,
		        success : function(data){
		            console.log(data);
		        }
		    });
		    return false;
		});
		
	});
	
	$(window).load(function(){
	})

})(jQuery);
