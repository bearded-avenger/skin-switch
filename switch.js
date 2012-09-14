jQuery(document).ready(function($) {
    var templateurl = '/wp-content/themes/spitzer';

	var styleswitcherstr = ' \
	<div id="switch-flip"><a class="style-switcher-close"></a></div> \
	<div id="style-switcher"> \
		<div class="switcher-wrapper"> \
	  			<div class="spitzer-themes"> \
	  			<span class="switcher-title">Themes</span> \
		  			<a class="spitzer-red" href="#"></a> \
		  			<a class="spitzer-blue" href="#"></a> \
		  			<a class="spitzer-green" href="#"></a> \
		  			<a class="spitzer-yellow" href="#"></a> \
		  			<a class="spitzer-pink" href="#"></a> \
	  			</div> \
	  				<div class="pattern-container"> \
					<span class="switcher-title">Patterns</span> \
						<a rel="pattern1" class="bg-box" href=""></a> \
						<a rel="pattern3" class="bg-box" href=""></a> \
						<a rel="pattern4" class="bg-box" href=""></a> \
						<a rel="pattern5" class="bg-box" href=""></a> \
						<a rel="pattern6" class="bg-box" href=""></a> \
						<a rel="pattern7" class="bg-box" href=""></a> \
						<a rel="pattern8" class="bg-box" href=""></a> \
						<a rel="pattern9" class="bg-box" href=""></a> \
						<a rel="pattern10" class="bg-box" href=""></a> \
						<a rel="pattern11" class="bg-box" href=""></a> \
						<a rel="pattern12" class="bg-box" href=""></a> \
						<a rel="pattern13" class="bg-box" href=""></a> \
						<a rel="pattern14" class="bg-box" href=""></a> \
						<a rel="pattern15" class="bg-box" href=""></a> \
						<a rel="pattern16" class="bg-box" href=""></a> \
						<a rel="pattern17" class="bg-box" href=""></a> \
						<a rel="pattern18" class="bg-box" href=""></a> \
						<a rel="pattern19" class="bg-box" href=""></a> \
						<a rel="pattern20" class="bg-box" href=""></a> \
						<a rel="pattern21" class="bg-box" href=""></a> \
						<a rel="pattern22" class="bg-box" href=""></a> \
						<a rel="pattern23" class="bg-box" href=""></a> \
						<a rel="pattern24" class="bg-box" href=""></a> \
						<a rel="pattern25" class="bg-box" href=""></a> \
				        <div class="clear"></div> \
				</div> \
		  		<span class="switcher-title">Colors</span> \
		  			<div class="clear"></div> \
		  		<div class="colorpicker-wrapper1"><div id="colorpicker"></div></div> <span class="pickertext">Body</span> \
		  			<div class="clear"></div> \
		  		<div class="colorpicker-wrapper2"><div id="colorpicker2"></div></div> <span class="pickertext">Content</span>  \
		  			<div class="clear"></div> \
		  		<div class="colorpicker-wrapper3"><div id="colorpicker3"></div></div> <span class="pickertext">Footer</span> \
		  			<div class="clear"></div> \
	  	  		<div class="switcher-reset-container"> \
		  			<a href="#" class="btn btn-important btn-mini" id="switch-reset">Reset</a> \
		  		</div> \
		  		<div class="clear"></div> \
	    </div> \
	</div> \
	';
	jQuery("body").prepend( styleswitcherstr );

	
	// Panel Movement
	jQuery('a.style-switcher-close').click(function () {
		jQuery('#style-switcher').slideToggle('fast');
	});

	// Theme Classes
	jQuery('a.spitzer-red').click(function() {
		jQuery('body').removeClass('spitzer-blue spitzer-green spitzer-yellow spitzer-pink').addClass('spitzer-red');
	});
	jQuery('a.spitzer-blue').click(function() {
		jQuery('body').removeClass('spitzer-red spitzer-green spitzer-yellow spitzer-pink').addClass('spitzer-blue');
	});
	jQuery('a.spitzer-green').click(function() {
		jQuery('body').removeClass('spitzer-red spitzer-blue spitzer-yellow spitzer-pink').addClass('spitzer-green');
	});
	jQuery('a.spitzer-yellow').click(function() {
		jQuery('body').removeClass('spitzer-red spitzer-blue spitzer-green spitzer-pink').addClass('spitzer-yellow');
	});
	jQuery('a.spitzer-pink').click(function() {
		jQuery('body').removeClass('spitzer-red spitzer-blue spitzer-green spitzer-yellow').addClass('spitzer-pink');
	});
    
	/*************** COLOR PICKER ******************/
	jQuery('#colorpicker').ColorPicker({
			onShow: function (colpkr) {
				jQuery(colpkr).fadeIn("fast");
				return false;
			},
			onHide: function (colpkr) {
				jQuery(colpkr).fadeOut("fast");
				return false;
			},
			onChange: function (hsb, hex, rgb) {	
				var bgcolor = hex;
				jQuery('body, .colorpicker-wrapper1').css({
					"background": '#' + bgcolor
				});        
				jQuery.cookie("cookie_bgcolor", bgcolor);   
			},
			color:'#282828'
    });
	
	jQuery('#colorpicker2').ColorPicker({
			onShow: function (colpkr) {
				jQuery(colpkr).fadeIn("fast");
				return false;
			},
			onHide: function (colpkr) {
				jQuery(colpkr).fadeOut("fast");
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				
				var bgcontainercolor = hex;
				jQuery('article, #sb_primary, .colorpicker-wrapper2').css({
					"background": '#' + bgcontainercolor
				});     
				jQuery.cookie("cookie_bgcontainercolor", bgcontainercolor);   
			},
			color:'#000000'
    });
	
	jQuery('#colorpicker3').ColorPicker({
			onShow: function (colpkr) {
				jQuery(colpkr).fadeIn("fast");
				return false;
			},
			onHide: function (colpkr) {
				jQuery(colpkr).fadeOut("fast");
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				var bgfootercolor = hex;
				jQuery('#footer, .colorpicker-wrapper3').css({
					"background": '#' + bgfootercolor
				});    
				jQuery.cookie("cookie_bgfootercolor", bgfootercolor);   	
			},
			color:'#000000'
    });
	
	
	/*************** END COLOR PICKER ******************/
	
	/*************** BACKGROUND PATTERN BOX **************/
	jQuery('#style-switcher a.bg-box').each(function (i) {
		var backgroundUrl = 'url('+templateurl+'/img/bg/' + jQuery(this).attr('rel') + '.png)';
		var a = jQuery(this);
		a.css({
			backgroundImage: backgroundUrl,
	  		backgroundRepeat: "repeat"
		})
	});
	/*************** END BACKGROUND PATTERN BOX **************/
	
  
  /********** bg-box.click ***************/
  jQuery('#style-switcher a.bg-box').click(function (e) {
      e.preventDefault();
      var backgroundUrl = 'url('+templateurl+'/img/bg/' + jQuery(this).attr('rel') + '.png)';
      jQuery('#site').css({
          backgroundImage: backgroundUrl,
          backgroundRepeat: "repeat"
      });
    jQuery.cookie("cookie_bgimage",backgroundUrl);
  });
  /********** end bg-box.click ***********/

  var bgcolor 			= jQuery.cookie("cookie_bgcolor");
  var bgcontainercolor	= jQuery.cookie("cookie_bgcontainercolor");
  var bgfootercolor		= jQuery.cookie("cookie_bgfootercolor");
  
  
  if(bgcolor){
	jQuery('body, .colorpicker-wrapper1').css({
		"background-color" : "#"+bgcolor
	});  
  }
  
  if(bgcontainercolor){
  	jQuery('article, #sb_primary, .colorpicker-wrapper2').css({
		"background-color": '#'+bgcontainercolor
	});
  }
  
  if(bgfootercolor){
  	jQuery('#footer, .colorpicker-wrapper3').css({
		"background-color": '#'+bgfootercolor
	});
  }
  
  jQuery("#switch-reset").click(function(){
  		
		var bgcolor = "282828";
		jQuery('body, .colorpicker-wrapper1').css({
			"background-color": '#' + bgcolor
		});     
		jQuery.cookie("cookie_bgcolor", bgcolor);
		
		var bgcontainercolor = "000000";
		jQuery('article, #sb_primary, .colorpicker-wrapper2').css({
			"background-color": '#' + bgcontainercolor
		});     
		jQuery.cookie("cookie_bgcontainercolor", bgcontainercolor);
		
		var bgfootercolor = "000000";
		jQuery('#footer, .colorpicker-wrapper3').css({
			"background-color": '#' + bgfootercolor
		});     
		jQuery.cookie("cookie_footercolor", bgfootercolor);

  });
         
});   
