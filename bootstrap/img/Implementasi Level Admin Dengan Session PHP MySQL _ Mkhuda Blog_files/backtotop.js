jQuery(document).ready(function(){jQuery(".back-to-top").hide();jQuery(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>500){jQuery('.back-to-top').fadeIn();}else{jQuery('.back-to-top').fadeOut();}});jQuery('.back-to-top a').click(function(){jQuery('body,html,header').animate({scrollTop:0},800);return false;});});});