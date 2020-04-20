/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
/*
function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "header_nav") {
    x.className += " responsive";
  } else {
    x.className = "header_nav";
  }
}
*/

const navigationBar = document.getElementById("nav");

function myFunction() {
  navigationBar.classList.toggle('responsive');
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 600 && navigationBar.classList.contains('responsive')) {
    navigationBar.classList.remove('responsive');
  }
})

