
var workHtml = document.querySelector('#allwork');

if (workHtml) {
	var exitButton = document.querySelectorAll('#allwork svg');

	//======== Buiten Beeld ========//
	var buitenbeeldPage = document.querySelector('#buitenbeeld');
	var buitenbeeldPrev = document.querySelector('#buitenbeeldPrev');

	function showBuitenbeeld() {
		buitenbeeldPage.classList.remove('moveforwards');
		buitenbeeldPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideBuitenbeeld() {
		document.body.classList.remove('scrolloff');
		buitenbeeldPage.classList.remove('move');
		buitenbeeldPage.classList.add('moveforwards');
	}

	buitenbeeldPrev.addEventListener('click', showBuitenbeeld);
	exitButton[0].addEventListener('click', hideBuitenbeeld);



	//======== WorldTravel ========//

	var worldtravelPage = document.querySelector('#worldtravel');
	var worldtravelPrev = document.querySelector('#worldtravelPrev');

	function showWorldtravel() {
		worldtravelPage.classList.remove('moveforwards');
		worldtravelPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideWorldtravel() {
		document.body.classList.remove('scrolloff');
		worldtravelPage.classList.remove('move');
		worldtravelPage.classList.add('moveforwards');
	}

	worldtravelPrev.addEventListener('click', showWorldtravel);
	exitButton[1].addEventListener('click', hideWorldtravel);



	//======== Discord ========//

	var discordPage = document.querySelector('#discord');
	var discordPrev = document.querySelector('#discordPrev');

	function showDiscord() {
		discordPage.classList.remove('moveforwards');
		discordPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideDiscord() {
		document.body.classList.remove('scrolloff');
		discordPage.classList.remove('move');
		discordPage.classList.add('moveforwards');
	}

	discordPrev.addEventListener('click', showDiscord);
	exitButton[2].addEventListener('click', hideDiscord);



	//======== Visual Interface Design ========//

	var visualidPage = document.querySelector('#visualid');
	var visualidPrev = document.querySelector('#visualidPrev');

	function showVisualid() {
		visualidPage.classList.remove('moveforwards');
		visualidPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideVisualid() {
		document.body.classList.remove('scrolloff');
		visualidPage.classList.remove('move');
		visualidPage.classList.add('moveforwards');
	}

	visualidPrev.addEventListener('click', showVisualid);
	exitButton[3].addEventListener('click', hideVisualid);


	//======== The Big Escape ========//

	var bigescapePage = document.querySelector('#bigescape');
	var bigescapePrev = document.querySelector('#bigescapePrev');
	var escapeButton = document.querySelector('.escape');

	function showBigescape() {
		bigescapePage.classList.remove('moveforwards');
		bigescapePage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideBigescape() {
		document.body.classList.remove('scrolloff');
		bigescapePage.classList.remove('move');
		bigescapePage.classList.add('moveforwards');
	}

	function openEscape() {
		window.open("https://oege.ie.hva.nl/~cloej/The%20Big%20Escape/","", "width=1440, height=732");
	}

	bigescapePrev.addEventListener('click', showBigescape);
	exitButton[4].addEventListener('click', hideBigescape);
	escapeButton.addEventListener('click', openEscape);


	//======== User Centered Design ========//

	var ucdPage = document.querySelector('#ucd');
	var ucdPrev = document.querySelector('#ucdPrev');

	function showUcd() {
		ucdPage.classList.remove('moveforwards');
		ucdPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideUcd() {
		document.body.classList.remove('scrolloff');
		ucdPage.classList.remove('move');
		ucdPage.classList.add('moveforwards');
	}

	ucdPrev.addEventListener('click', showUcd);
	exitButton[5].addEventListener('click', hideUcd);



	//======== VRcafe Haarlem ========//

	var vrcafePage = document.querySelector('#vrcafe');
	var vrcafePrev = document.querySelector('#vrcafePrev');

	function showVrcafe() {
		vrcafePage.classList.remove('moveforwards');
		vrcafePage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideVrcafe() {
		document.body.classList.remove('scrolloff');
		vrcafePage.classList.remove('move');
		vrcafePage.classList.add('moveforwards');
	}

	vrcafePrev.addEventListener('click', showVrcafe);
	exitButton[6].addEventListener('click', hideVrcafe);



	//======== Tom and Jerry ========//

	var tomnjerryPrev = document.querySelector('#tomnjerryPrev');

	function openTomnjerry() {
		window.open("https://juliandecloe.github.io/TomAndJerry/","", "width=1440, height=732");
	}

	tomnjerryPrev.addEventListener('click', openTomnjerry);
}


var homeHtml = document.querySelector('#home');


if (homeHtml) {

	var exitButton = document.querySelectorAll('#home svg');


	//======== Buiten Beeld ========//

	var buitenbeeldPage = document.querySelector('#buitenbeeld');
	var buitenbeeldPrev = document.querySelector('#buitenbeeldPrev');

	function showBuitenbeeld() {
		buitenbeeldPage.classList.remove('moveforwards');
		buitenbeeldPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideBuitenbeeld() {
		document.body.classList.remove('scrolloff');
		buitenbeeldPage.classList.remove('move');
		buitenbeeldPage.classList.add('moveforwards');
	}

	buitenbeeldPrev.addEventListener('click', showBuitenbeeld);
	exitButton[0].addEventListener('click', hideBuitenbeeld);


	//======== VRcafe Haarlem ========//

	var vrcafePage = document.querySelector('#vrcafe');
	var vrcafePrev = document.querySelector('#vrcafePrev');

	function showVrcafe() {
		vrcafePage.classList.remove('moveforwards');
		vrcafePage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideVrcafe() {
		document.body.classList.remove('scrolloff');
		vrcafePage.classList.remove('move');
		vrcafePage.classList.add('moveforwards');
	}

	vrcafePrev.addEventListener('click', showVrcafe);
	exitButton[3].addEventListener('click', hideVrcafe);


	//======== User Centered Design ========//

	var ucdPage = document.querySelector('#ucd');
	var ucdPrev = document.querySelector('#ucdPrev');

	function showUcd() {
		ucdPage.classList.remove('moveforwards');
		ucdPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideUcd() {
		document.body.classList.remove('scrolloff');
		ucdPage.classList.remove('move');
		ucdPage.classList.add('moveforwards');
	}

	ucdPrev.addEventListener('click', showUcd);
	exitButton[2].addEventListener('click', hideUcd);


	//======== Discord Remake ========//

	var discordPage = document.querySelector('#discord');
	var discordPrev = document.querySelector('#discordPrev');

	function showDiscord() {
		discordPage.classList.remove('moveforwards');
		discordPage.classList.add('move');
		document.body.classList.add('scrolloff');
	}

	function hideDiscord() {
		document.body.classList.remove('scrolloff');
		discordPage.classList.remove('move');
		discordPage.classList.add('moveforwards');
	}

	discordPrev.addEventListener('click', showDiscord);
	exitButton[1].addEventListener('click', hideDiscord);

}

function elemInViewport(element) {
	var rect = element.getBoundingClientRect();
	return (
		rect.top < 710
	);
}


var allElem = document.querySelectorAll('main *');

document.addEventListener('scroll', function () {
	for(var i = 0; i < allElem.length; i++) {
		if (elemInViewport(allElem[i])) {
			allElem[i].classList.add('elemhidden');
		}
	}
});

for(var i = 0; i < allElem.length; i++) {
	if (elemInViewport(allElem[i])) {
		allElem[i].classList.add('elemhidden');
	}
}











