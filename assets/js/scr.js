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
	
	
	$(document).ready(function(){
		modernize();
		sliderInit();
		navbartoggle();
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

})(jQuery);
