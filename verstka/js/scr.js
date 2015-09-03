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

	function zTabs(block){
		if (typeof(block)==='undefined') block=$('.zTabs');
		block.each(function(){
			var $wrap=$(this);
			if (!$wrap.is('.zTabs-done')){
				$wrap.addClass('zTabs-done');
				$('[data-zTabId]',$wrap).click(function(event){
					event.preventDefault();
					var tabid=$(this).data('ztabid');
					$('[data-zTabId]',$wrap).removeClass('active');
					$('[data-zTabId="'+tabid+'"]',$wrap).addClass('active');
					$('[data-zTab]',$wrap).removeClass('active').addClass('hidden');
					$('[data-zTab="'+tabid+'"]',$wrap).addClass('active').removeClass('hidden');
				})
				if ($('.active[data-zTabId]',$wrap).length>0)
					$('.active[data-zTabId]',$wrap).click();
				else
					$('[data-zTabId]:eq(0)',$wrap).click();
			}
		})
	}

	/* scrollUp */
	function scrollUp(block,targetBlock) {
		$(block).click(function(e){
			var target = $(targetBlock).offset().top;
			$(scroller).animate({scrollTop:target},800);
			return false;
			e.preventDefault();
		});
	}

	/*Podderzhka Placeholderov v starih brouzerah*/
	$(document).ready(function(){
		modernize();
		zTabs();
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
