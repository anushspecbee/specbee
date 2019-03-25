/**
 * @file
 * Global JS file for themespecbee.
 */


$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {

			$(".header").css("background", "#FFFF");
			$(".header a").css("color", "#000");
			$('.header img').attr("src", "https://www.specbee.com/images/logo-blcak.svg");
			$('.site-navigation .menu .menu-item a').css("background-image"," linear-gradient(black, black)");
			$(".header").css("position", "fixed");
			

		}
		else if (scroll < 100 && scroll >= 0) {
			$(".header").css("background", "transparent");
			$(".header a").css("color", "#FFF");
			$('.header img').attr("src", "https://www.specbee.com/images/logo.svg");
			$('.site-navigation .menu .menu-item a').css("background-image"," linear-gradient(white, white)");

		}

	})
})
